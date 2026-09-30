function FindProxyForURL(url, host) {
    // If your Chromebook is currently assigned an IP on your phone's hotspot range
    // (Replace "192.168.43.0" with your common mobile tethering subnet range)
    if (isInNet(myIpAddress(), "192.168.43.0", "255.255.255.0")) {
        
        // Match massive data-draining video networks
        if (shExpMatch(host, "*.netflix.com") || 
            shExpMatch(host, "*.googlevideo.com") || 
            shExpMatch(host, "*.twitch.tv")) {
            
            // Route them to a local loopback to temporarily pause them while on data
            return "PROXY 127.0.0.1:0"; 
        }
    }

    return "DIRECT";
}