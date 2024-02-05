# How to create your own E-Mail Server using Kerio Server on Windows

Use this trial key when it asks
10512-Z7K1I-1UNM3


After install open mailserver.cfg and change the admin port 4040 to any other opened port if you want.

You have to open these ports on your vps inbound firewall:
25, 465, 587, 110, 995, 143, 993, 119, 563, 389, 636, 80,443, 8800, 8843, 5222, 5223 and admin port(default 4040)

Try to send a test email using your gmail. If you cant receive emails, check these:
1. Disable antivirus feature on Kerio admin setting. recommended to disable spam too.
2. Check inbound firewall. if you use AWS, add rule also on AWS inbound rule.
3. Sometimes it takes some time to effect domain setting changes.
4. Make sure, the smtp and the other email service ports are used by Kerio server. Some apps such as ccproxy, uses email ports.
5. Some vps hosting service blocks SMTP port (25). So it is impossible to use their vps as email server.
