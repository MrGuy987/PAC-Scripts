function FindProxyForURL(url, host) {
if (shExpMatch(host, "*.netflix.com") ||
shExpMatch(host, "*.youtube.com") ||
shExpMatch(host, "*.googlevideo.com") ||
shExpMatch(host, "*.twitch.tv") ||
shExpMatch(host, "*.spotify.com")) {
return "DIRECT";
}
return "PROXY secure-proxy.domain.com:8080";
}