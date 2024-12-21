import { createElement, HTMLAttributes } from 'react';
import sanitize from 'sanitize-html';

type Props = {
	children: string;
	tag: string;
} & HTMLAttributes<HTMLElement>;

export function SanitizeHTML({ tag, children, ...rest }: Props) {
	const sanitizeHTML = sanitize(children, {
		allowedTags: ['b', 'i', 'em', 'strong'],
	});

	return createElement(tag, { ...rest }, sanitizeHTML);
}
