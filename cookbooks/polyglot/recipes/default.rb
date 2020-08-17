ubuntu_mirror = 'http://ubuntu.mirror.rafal.ca/ubuntu/'
ubuntu_release = 'bionic'
ubuntu_version = '18.04'
username = 'vagrant'
user_home = '/home/' + username
project_home = user_home + '/project/WebCalc/calc' # you may need to change the working directory to match your project


python3_packages = '/usr/local/lib/python3.6/dist-packages'
ruby_gems = '/var/lib/gems/2.5.0/gems/'


# Get Ubuntu sources set up and packages up to date.

template '/etc/apt/sources.list' do
  variables(
    :mirror => ubuntu_mirror,
    :release => ubuntu_release
  )
  notifies :run, 'execute[apt-get update]', :immediately
end
execute 'apt-get update' do
  action :nothing
end
execute 'apt-get upgrade' do
  command 'apt-get dist-upgrade -y'
  only_if 'apt list --upgradeable | grep -q upgradable'
end
directory '/opt'
directory '/opt/installers'


# Basic packages many of us probably want. Includes gcc C and C++ compilers.

package ['build-essential', 'cmake']


# Other core language tools you might want

package ['python3', 'python3-pip', 'python3-dev']  # Python
package ['rustc', 'cargo']  # Rust


# NodeJS (more modern than Ubuntu nodejs package) and NPM

remote_file '/opt/installers/node-setup.sh' do
 source 'https://deb.nodesource.com/setup_14.x'
 mode '0755'
end
execute '/opt/installers/node-setup.sh' do
 creates '/etc/apt/sources.list.d/nodesource.list'
 notifies :run, 'execute[apt-get update]', :immediately
end
package ['nodejs']


#
execute 'npm install --no-bin-links' do
  cwd project_home + '/server'
  user username
  environment 'HOME' => user_home
end

execute 'screen -dm npm start' do
  cwd project_home + '/server'
  user username
  environment 'HOME' => user_home
end

execute 'cargo build --release' do
  cwd project_home 
  user username
  environment 'HOME' => user_home
end

execute 'pip3 install requests' do
 creates "#{python3_packages}/requests/__init__.py"
end

execute 'python3 embed.py' do
  cwd project_home
  user username
  environment 'HOME' => user_home
end

