/** Utilities to compose regular expressions for IDs and dictionary keys. */

import {
	type StringOptions,
	type TString,
	Type,
	type ObjectOptions
} from '@sinclair/typebox'
import { escapeRegExp } from 'lodash-es'
import { UnionOneOf } from './UnionOneOf.js'
import { JsonTypeDef } from '../../../scripts/json-typedef/symbol.js'

const sep = escapeRegExp('/')
const wc = escapeRegExp('*')
const wce = wc + wc
const node = /([a-z][a-z_]*)/
const namespace = /([a-z0-9_]{3,})/
const index = /(0|[1-9][0-9]*)/
const range = /([1-9][0-9]*)-([1-9][0-9]*)/
const collection = /collections/
const nodeRecursive = recurse(node)

const recursiveElementWildcard = oneOf(
	nodeRecursive,
	new RegExp(sep + wce),
	new RegExp(sep + wce + sep + node.source),
	new RegExp(sep + node.source + sep + wce)
)

export const Pkg = Symbol(namespace.source)
export type Pkg = typeof Pkg
export const Node = Symbol(node.source)
export type Node = typeof Node
export const NodeRecursive = Symbol(nodeRecursive.source)
export type NodeRecursive = typeof NodeRecursive
export const Index = Symbol(index.source)
export type Index = typeof Index
export const DiceRange = Symbol(range.source)
export type DiceRange = typeof DiceRange
export const Collection = Symbol(collection.source)
export type Collection = typeof Collection
const noSeparator = [NodeRecursive]
type IdElementSymbol =
	| Pkg
	| NodeRecursive
	| Node
	| Index
	| DiceRange
	| Collection
type IdElement = IdElementSymbol | string

export const PatternElements = Symbol('PatternElements')
type IdOptions = StringOptions
type TId = TString & { [PatternElements]: IdElement[]; pattern: string }

export function IdUnion(members: TId[], options: ObjectOptions) {
	const regex = oneOf(
		...members.map(
			(item) =>
				new RegExp(getPatternSubstrings(...item[PatternElements]).join(''))
		)
	)

	const extendedOptions = {
		[JsonTypeDef]: {
			schema: { type: 'string', metadata: { pattern: `^${regex.source}$` } }
		},
		...options
	}

	return UnionOneOf(members, extendedOptions)
}

export function Id(elements: IdElement[], options: IdOptions = {}) {
	const regex = new RegExp(`^${getPatternSubstrings(...elements).join('')}$`)
	const result = Type.RegExp(regex, options) as TId
	result[PatternElements] = elements
	return result
}
export function RecursiveCollectableId(
	type: IdElement[],
	options: IdOptions = {}
) {
	return Id([Pkg, ...type, NodeRecursive, Node], options)
}
export function RecursiveCollectionId(
	type: IdElement[],
	options: IdOptions = {}
) {
	return Id([Pkg, Collection, ...type, NodeRecursive], options)
}
export function CollectableId(type: IdElement[], options: IdOptions = {}) {
	return Id([Pkg, ...type, Node, Node], options)
}
export function CollectionId(type: IdElement[], options: IdOptions = {}) {
	return Id([Pkg, Collection, ...type, Node], options)
}

export function UncollectableId(type: IdElement[], options: IdOptions = {}) {
	return Id([Pkg, ...type, Node], options)
}

export function Extend(
	base: TId,
	append: IdElement[],
	options: IdOptions = {}
) {
	const baseElements = base[PatternElements].filter(
		(f) => f !== Collection
	) as [string, ...IdElement[]]

	return Id([...baseElements, ...append], options)
}

export function toWildcard(base: TId, options: IdOptions = {}) {
	if (base.title && !options.title)
		options.title = base.title + ' (with wildcard)'
	const elements = base[PatternElements].map((item) => _toWildcard(item))
	return Id(elements, options)
}

function wildcard(pattern: RegExp) {
	return oneOf(new RegExp(wc), pattern)
}
function group(pattern: RegExp) {
	return new RegExp(`(${pattern.source})`)
}
function recurse(pattern: RegExp) {
	return new RegExp(`(${sep}${pattern.source}){1,3}`)
}
function oneOf(...items: RegExp[]) {
	return group(new RegExp(items.map((item) => item.source).join('|')))
}
function _toWildcard<T extends IdElement>(element: T) {
	switch (true) {
		case typeof element === 'string':
		case element === Collection:
			return element
		case element === NodeRecursive:
			return recursiveElementWildcard.source
		default: {
			const src = (element as symbol)?.description as string
			const regexp = new RegExp(src)
			return wildcard(regexp).source
		}
	}
}
function getPatternSubstrings(...elements: IdElement[]) {
	elements = [...elements]

	const idParts = []

	for (let i = 0; i < elements.length; i++) {
		const element = elements[i]

		const needsSeparator =
			i > 0 && (typeof element === 'string' || !noSeparator.includes(element))

		if (needsSeparator) idParts.push(sep)

		idParts.push((element as symbol).description ?? element)
	}

	return idParts
}
