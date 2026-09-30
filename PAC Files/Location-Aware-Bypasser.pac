function FindProxyForURL(url, host) {
if (isInNet(myIpAddress(), "192.168.1.0", "255.255.255.0")) {
return "DIRECT";
}
return "PROXY office-proxy.domain.com:8080";
}