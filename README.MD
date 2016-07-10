# Learn Rails

##Note
1.

##Environment
1. RVM安装<br>
	`curl -sSL https://get.rvm.io | bash -s stable`

2. RVM换源<br> 
	`echo "ruby_url=https://cache.ruby-china.org/pub/ruby" > ~/.rvm/user/db`

3. 用RVM安装Ruby<br>
	`rvm requirements`
	
	`rvm install 2.3.0`

4. 设置 Ruby 版本<br>
`rvm use 2.3.0 --default`

5. gem换源<br>
	`gem sources --add https://ruby.taobao.org/ --remove https://rubygems.org/`
	
	`bundle config mirror.https://rubygems.org https://ruby.taobao.org`

6. 安装bundler和rails<br>
	`gem install bundler`

	`gem install rails`
