import { JsonLd, serviceSchema } from '@/lib/schema'
import PostcodeTakeoverClient from './PostcodeTakeoverClient'

export const metadata = {
  title: 'Postcode Takeover — $99 Setup | Australian Property Marketing',
  description: 'Own your local area for $10 a day. We build your Instagram ad system so you become the agent every homeowner in your suburb recognises.',
  openGraph: {
    title: 'Postcode Takeover — Own Your Local Area for $10 a Day',
    description: 'We build your Instagram ad system. You become the agent everyone in your suburb recognises. $99 one-time setup.',
    url: 'https://australianpropertymarketing.com.au/lp/postcode-takeover',
    siteName: 'Australian Property Marketing',
    locale: 'en_AU',
    type: 'website',
  },
}

export default function PostcodeTakeoverPage() {
  return (
    <>
      <JsonLd data={serviceSchema({
        name: 'Postcode Takeover',
        description: 'Hyper-local Instagram ad system for real estate agents. Custom audience targeting, ad creative templates, and campaign architecture for $99 one-time setup.',
        url: '/lp/postcode-takeover',
      })} />
      <PostcodeTakeoverClient />
    </>
  )
}
