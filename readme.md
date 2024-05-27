# NodeAPI Deployment Guide on AWS EC2

This guide will help you deploy a Node.js API on an AWS EC2 instance. Follow the steps carefully to ensure a smooth deployment.

## Prerequisites

1. **AWS Account**: Ensure you have an active AWS account.
2. **EC2 Instance**: An EC2 instance with the appropriate permissions and security group settings.
3. **SSH Access**: SSH access to your EC2 instance.
4. **Node.js & npm**: Node.js and npm should be installed on the EC2 instance.

## Step 1: Set Up EC2 Instance

1. **Launch an EC2 Instance**:
   - Go to the EC2 Dashboard and click on "Launch Instance".
   - Select an Amazon Machine Image (AMI). The Ubuntu is a good choice for most purposes.
   - Choose an Instance Type. The `t2.micro` is sufficient for small applications.
   - Configure the instance details, storage, tags, and security group. Ensure that port 22 (SSH) and port 80 (HTTP) are open.
   - Review and launch the instance. Download the key pair (.pem file) if you haven't already.

2. **Connect to Your Instance**:
   - Open your terminal and navigate to the directory containing your key pair (.pem) file.
      ```sh
        chmod 600 your-key-pair.pem
        ```
   - Use the following command to connect to your instance:
     ```sh
     ssh -i "your-key-pair.pem" ec2-user@your-ec2-public-dns
     ```

## Step 2: Install Node.js and npm

1. **you will need to install Node and npm**:
   ```sh
    sudo apt update
    sudo apt install nodejs -y
    sudo apt install npm -y
   ```


## Step 3: Deploy Your Node.js API

1. **Clone Your Repository**:
   - Clone your Node.js API repository:
     ```sh
     git clone -b ec2-deploy https://github.com/chhetri123/Node_api_deploy.git
     cd Node_api_deploy
     ```

2. **Install Dependencies**:
   ```sh
   npm install
   ```

3. **Start Your Node.js Application**:
   - You can start your application using:
     ```sh
     npm start
     ```
  - visit your_public_ip:3000
## Step 5: Configure Security Group

1. **Open Ports**:
   - Ensure your security group allows incoming traffic on the necessary ports (e.g., port 80 for HTTP, port 443 for HTTPS, TCP 3000).
   - Go to the EC2 Dashboard, select your instance, click on "Security Groups", and edit the inbound rules.

## Conclusion

Your Node.js API should now be up and running on your EC2 instance. You can access it through the public DNS or IP address of your EC2 instance. Make sure to secure your application and monitor its performance regularly.
