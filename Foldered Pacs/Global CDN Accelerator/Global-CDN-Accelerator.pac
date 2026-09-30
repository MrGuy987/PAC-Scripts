function FindProxyForURL(url, host) {
    // Force fast public asset delivery networks to bypass any proxy
    if (shExpMatch(host, "*.cdnjs.cloudflare.com") ||
        shExpMatch(host, "*.googleapis.com") ||
        shExpMatch(host, "*.gstatic.com") ||
        shExpMatch(host, "*.cloudfront.net") ||
        shExpMatch(host, "*.fastly.net") ||
        shExpMatch(host, "*.akamaihd.net")) {
        return "DIRECT";
    }

    // Default route for regular website data
    return "PROXY your-everyday-proxy.com:8080; DIRECT";
}
