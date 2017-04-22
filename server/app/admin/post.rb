ActiveAdmin.register Post do
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
    column :user do |p|
      p.user.try(:name)
    end
    column :headlines
    column :category
    column :title
    column :comments do |p|
      p.comments.count
    end
    actions
  end

end
