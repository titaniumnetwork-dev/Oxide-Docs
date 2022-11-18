import * as React from 'react'
import { Helmet } from 'react-helmet-async'

const Wrapper = ({ children, doc }) => <React.Fragment>
    <Helmet>
        <meta charSet="utf-8" />
        <meta name="og:title" property="og:title" content="Titanium Network | SDK Documentation">
        <title>Titanium Network | SDK Documentation</title>
        <link rel="icon" type="image/png" href="https://titaniumnetwork.org/logo.png"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no"/>
        <meta name="description" content="The official site for Titanium Network, an organization dedicated to providing free access to information by innovating web proxy technologies and bypassing censorship."/>
        <meta name="theme-color" media="(prefers-color-scheme: dark)" content="#434c5e"/>
        <meta name="keywords" content="proxy, web proxy, unblock websites, unblock chromebook, free web proxy, proxy list, proxy sites, un block chromebook, online proxy, proxy server, proxysite, proxy youtube, bypass securly, bypass iboss, bypass lightspeed filter, holy unblocker, chromebooks, titanium network, unblock youtube, youtube proxy, unblocked youtube, youtube unblocked, Titanium Network, Hypertabs, Securly, iboss, Relay, Lightspeed, Unblock, Bypass, Chromebooks, Alloy Proxy"/>
        <meta name="googlebot" content="index, follow, snippet" />
        <script src="https://titaniumnetwork.org/seo.js" type="application/ld+json"></script>
    </Helmet>
    {children}
</React.Fragment>
export default Wrapper