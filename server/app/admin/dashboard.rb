ActiveAdmin.register_page "Dashboard" do

  menu priority: 1, label: proc{ I18n.t("active_admin.dashboard") }

  content title: proc{ I18n.t("active_admin.dashboard") } do

    columns do

      column do
        panel "最近注册的用户" do
          ul do
            User.last(5).map do |u|
              li do
                img src: u.profile.avatar, style: 'width: 20px;height: 20px;border-radius: 50%;'
                a link_to(u.profile.nickname, admin_user_path(u))
              end
            end
          end
        end
      end

      column do
        panel "最近发表的文章" do
          ul do
            Post.first(5).map do |post|
              li link_to(post.title, admin_post_path(post))
            end
          end
        end
      end

    end

  end # content
end
