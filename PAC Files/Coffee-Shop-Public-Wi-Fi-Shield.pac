function FindProxyForURL(url, host) {
    // 1. Identify your trusted Home network range. If home, go DIRECT (Max Speed)
    if (isInNet(myIpAddress(), "192.168.1.0", "255.255.255.0")) {
        return "DIRECT";
    }

    // 2. If you are on an unfamiliar subnet (e.g., standard cafe 10.x.x.x ranges)
    // Route traffic through your trusted personal secure proxy
    return "PROXY secure-home-tunnel.com:443; DIRECT";
}
