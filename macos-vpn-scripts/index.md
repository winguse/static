# MacOS VPN Script

Automatically split domestic (China Mainland) and international traffic:

1. Use the domestic DNS result from domestic DNS server and vice versa.
2. Use an optimized route table, to make sure domestic IPs are using local gateway, and United States IPs are going VPN.

## Install

```sh
curl https://wingu.se/static/macos-vpn-scripts/install | sudo bash
```

And you can use the VPN normally.

### Disable temporary

Disable:

```sh
sudo touch /etc/ppp/ip-script-disabled
```

Re-enable:

```
sudo rm /etc/ppp/ip-script-disabled
```

## Uninstall

```sh
sudo rm /etc/ppp/ip-up /etc/ppp/ip-down /etc/ppp/cn-cidrs.txt /usr/local/bin/another-dns
```

