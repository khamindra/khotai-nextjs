import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { ClerkProvider } from '@clerk/nextjs'
import localFont from 'next/font/local'

const shan = localFont({
	src: './fonts/Shan.woff2',
	variable: '--font-shan',
	weight: '100 900',
})

export const metadata: Metadata = {
	title: 'Khotai Online',
	description: 'Best & Largest Shan Clothing Collection',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<ClerkProvider>
			<html lang='en'>
				<body className={`${shan.variable} antialiased`}>
					<Header />
					{children}
					<Footer />
				</body>
			</html>
		</ClerkProvider>
	)
}
