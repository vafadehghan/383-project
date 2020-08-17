This project is meant to show off intercommunication between 3 languages (Javascript, Rust, and Python)

The Rust program will calculate fibonacci and Catalan number values and send it to the Python program.

The Python program will time each version of the algorithn (Dynamic Programming, and Recusrive) and send it to a Node.Js server.

After running 
```sh
vagrant up
```
Go to \383-project\WebCalc\calc\frontend\index.html to view the results

## Starting the VM

This repository is designed to deploy itself into a virtual machine, managed by [Vagrant](https://www.vagrantup.com/downloads.html) and [VirtualBox](https://www.virtualbox.org/wiki/Downloads). You should be able to change into the repository directory and type:
```sh
vagrant up
```
&hellip; to bring up a virtual machine. As part of creating the VM, Vagrant will run the Chef cookbook provided (described below).

Once you have the VM up, you can SSH into it and start running commands (and press ctrl-D to exit):
```sh
vagrant ssh
```

If you'd like to shut down or destroy the VM, you can do it with these commands:
```sh
vagrant halt
vagrant destroy
```


## The Cookbook

The [Chef cookbook](https://docs.chef.io/cookbooks/) that is provided in `cookbooks/polyglot/recipes/default.rb` and can be edited as necessary.

Most of the recipe is commented out: you can un-comment parts as necessary to install language tools or libraries as described there. If you need other libraries (e.g. Ruby on Rails, a Go package for some numeric computation), hopefully you can do it by analogy with the commented code in the recipe.

If you would like to re-run the recipe, you can ask Vagrant to do that:
```sh
vagrant provision
```
