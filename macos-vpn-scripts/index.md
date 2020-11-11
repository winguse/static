# MacOS VPN Script

Automatically split domestic (China Mainland) and international traffic:

1. Use the domestic DNS result from domestic DNS server and vice versa.
2. A dropdown menu to select different policies.

## Install

```sh
sudo sh -c "curl https://wingu.se/static/macos-vpn-scripts/install | sh"
```

And you can see a 🚥 menu in your system tray when you connect to VPN.

## Uninstall

```sh
sudo rm /etc/ppp/ip-up /etc/ppp/ip-down /etc/ppp/cn-cidrs.txt /etc/ppp/another-dns /etc/ppp/static-dns-policy.txt /etc/ppp/another-dns.log /etc/ppp/dns-policy.txt
```
