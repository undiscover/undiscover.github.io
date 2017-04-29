# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.configure(2) do |config|
  config.vm.box = 'bento/ubuntu-16.04'
  config.vm.provision :shell, path: 'Vagrant.bootstrap.sh'
  config.vm.network "forwarded_port", guest: 8822, host: 8822
end