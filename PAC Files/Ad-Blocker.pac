function FindProxyForURL(url, host) {
    
    // =========================================================================
    // 1. SPECIFIC YOUTUBE AD & TRACKING ENDPOINTS
    // =========================================================================
    if (shExpMatch(host, "://youtube.com") ||
        shExpMatch(host, "://google.com") ||
        shExpMatch(host, "*.youtube-nocookie.com") ||
        // Blocks YouTube's internal viewing metrics and ad-tracking telemetry
        shExpMatch(host, "://youtube.com") ||
        shExpMatch(host, "://google.com") ||
        // Targets specific ad-heavy subdomains of the main video delivery network
        shExpMatch(host, "://googlesyndication.com") ||
        shExpMatch(host, "pubads.g.doubleclick.net")) {
        
        return "PROXY 127.0.0.1:0";
    }

    // =========================================================================
    // 2. BROAD AD NETWORKS & TRACKERS (Your Original List Expanded)
    // =========================================================================
    if (shExpMatch(host, "*.doubleclick.net") ||
        shExpMatch(host, "*.googleadservices.com") ||
        shExpMatch(host, "*.googlesyndication.com") ||
        shExpMatch(host, "*.telemetry.microsoft.com") ||
        shExpMatch(host, "*.analytics.google.com") ||
        shExpMatch(host, "*.adnxs.com") ||
        shExpMatch(host, "*.taboola.com") ||
        shExpMatch(host, "*.outbrain.com") ||
        shExpMatch(host, "*.scorecardresearch.com") ||
        shExpMatch(host, "ads.*") ||
        shExpMatch(host, "telemetry.*") ||
        shExpMatch(host, "tracker.*") ||
        shExpMatch(host, "metrics.*")) {
        
        return "PROXY 127.0.0.1:0"; 
    }

    // =========================================================================
    // 3. DEFAULT INTERNET CONNECTION
    // =========================================================================
    // If it doesn't match an ad rule, let the webpage load normally
    return "DIRECT";
}