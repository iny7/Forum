ActiveAdmin.register Comment, :as => "BlogComment" do
  menu priority: 3, label: "评论管理"
  permit_params :list, :of, :attributes, :on, :model
#
# or
#
# permit_params do
#   permitted = [:permitted, :attributes]
#   permitted << :other if params[:action] == 'create' && current_user.admin?
#   permitted
# end

  index do
    column :id
    column :author do |c|
      c.user.profile.try(:nickname)
    end
    column :content
    column :created_at

    actions
  end
end
