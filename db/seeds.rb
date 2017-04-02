users = User.create([
  {
    email: 'a@a.com',
    name: '一傻子',
    password: 'a'
  },
  {
    email: 't@t.com',
    name: '二傻子',
    password: 't'
  }
])

posts = Post.create([
  {
    title: '头条新闻',
    user_id: 1,
    content: '如果你无法简洁的表达你的想法，那只说明你还不够了解它。如果你无法简洁的表达你的想法，那只说明你还不够了解它解它...\n
            如果你无法简洁的表达你的想法，那只说明你还不够了解它。如果你无法简洁的表达你的想法，那只说明你还不够了解它解它...\n
            如果你无法简洁的表达你的想法，那只说明你还不够了解它。如果你无法简洁的表达你的想法，那只说明你还不够了解它解它...\n
            如果你无法简洁的表达你的想法，那只说明你还不够了解它。如果你无法简洁的表达你的想法，那只说明你还不够了解它解它...\n',
    created_at: DateTime.now,
    updated_at: DateTime.now,
    headlines: true
  },
  {
    title: '请教下，PostCSS和rework有什么区别区区别...',
    user_id: 1,
    content: '如果你无法简洁的表达你的想法，那只说明你还不够了解它。如果你无法简洁的表达你的想法，那只说明你还不够了解它解它...\n
            如果你无法简洁的表达你的想法，那只说明你还不够了解它。如果你无法简洁的表达你的想法，那只说明你还不够了解它解它...\n
            如果你无法简洁的表达你的想法，那只说明你还不够了解它。如果你无法简洁的表达你的想法，那只说明你还不够了解它解它...\n
            如果你无法简洁的表达你的想法，那只说明你还不够了解它。如果你无法简洁的表达你的想法，那只说明你还不够了解它解它...\n',
    created_at: DateTime.now,
    updated_at: DateTime.now,
    headlines: false
  }
])

comments = Comment.create([
  {
    post_id: 1,
    user_id: 1,
    content: '我是111评论内容!!!!',
    created_at: DateTime.now,
    updated_at: DateTime.now,
  },
  {
    post_id: 1,
    user_id: 2,
    content: '我是111评论内容!!!!',
    created_at: DateTime.now,
    updated_at: DateTime.now
  },
  {
    post_id: 2,
    user_id: 1,
    content: '我是222评论内容!!!!',
    created_at: DateTime.now,
    updated_at: DateTime.now
  },
  {
    post_id: 3,
    user_id: 2,
    content: '我是222评论内容!!!!',
    created_at: DateTime.now,
    updated_at: DateTime.now
  }
])

AdminUser.create([
  {
    email: 'admin@example.com',
    password: 'password',
    password_confirmation: 'password'
  }
])