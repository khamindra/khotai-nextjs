import React from 'react'
import {
	TooltipContent,
	TooltipProvider,
	Tooltip,
	TooltipTrigger,
} from './ui/tooltip'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import {
	Facebook,
	Github,
	Linkedin,
	Twitter,
	Youtube,
} from 'lucide-react'

interface Props {
	className?: string
	iconClassName?: string
	tooltipClassName?: string
}

const socialLink = [
	{
		title: 'Youtube',
		href: 'https://www.youtube.com',
		icon: <Youtube className='w-5 h-5' />,
	},
	{
		title: 'Github',
		href: 'https://www.github.com',
		icon: <Github className='w-5 h-5' />,
	},
	{
		title: 'Linkedin',
		href: 'https://www.linkedin.com',
		icon: <Linkedin className='w-5 h-5' />,
	},
	{
		title: 'Facebook',
		href: 'https://www.facebook.com',
		icon: <Facebook className='w-5 h-5' />,
	},
	{
		title: 'Twitter',
		href: 'https://www.x.com',
		icon: <Twitter className='w-5 h-5' />,
	},
]
const SocialMedia = ({
	className,
	iconClassName,
	tooltipClassName,
}: Props) => {
	return (
		<TooltipProvider>
			<div className={cn('flex items-center gap-3.5', className)}>
				{socialLink?.map(item => (
					<Tooltip key={item?.title}>
						<TooltipTrigger asChild>
							<Link
								href={item?.href}
								target='_blank'
								rel='noopener noreferer'
								className={cn(
									'p-2 border rounded-full hover:text-white hover:border-white hoverEffect',
									iconClassName
								)}>
								{item?.icon}
							</Link>
						</TooltipTrigger>
						<TooltipContent
							className={cn(
								'bg-white text-darkColor font-semibold',
								tooltipClassName
							)}>
							{item?.title}
						</TooltipContent>
					</Tooltip>
				))}
			</div>
		</TooltipProvider>
	)
}

export default SocialMedia
