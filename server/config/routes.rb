Rails.application.routes.draw do

  ActiveAdmin.routes(self)
  devise_for :users, controllers: {
    sessions: 'users/sessions',
    registrations: 'users/registrations'
  }

  scope module: :users do
    resource :profiles, only: [:show, :update]
    # get '/account' => 'account#show'
    # resource :account, only: [:show]
  end

  # get 'users/signin' => 'application#index'
  resources :users, only: [:show] do
    # scope module: :users do
    #   resource :relationship, only: [:create, :destroy] do
    #     get :following
    #     get :followers
    #   end
    # end

    # 关注 / 取关
    member do
      post   '/follow' => 'users/relationships#create'
      delete '/follow' => 'users/relationships#destroy'
    end

    # 关注 / 粉丝
    get '/following' => 'users#following'
    get '/followers' => 'users#followers'

    get '/posts'    => 'users#posts'
    get '/comments' => 'users#comments'
  end

  # resource :wechat, only: [:show, :create]

  # Example of named route that can be invoked with purchase_url(id: product.id)
  #   get 'products/:id/purchase' => 'catalog#purchase', as: :purchase

  # Example resource route (maps HTTP verbs to controller actions automatically):
  concern :likeable do
    member do
      post :like
      delete :unlike
    end
  end

  resources :posts, except: [:new, :edit], concerns: :likeable do
    resources :comments, only: [:index, :create, :destroy]
  end
  resources :comments, only: [], concerns: :likeable
  # resources :messages

  # Example resource route with options:
  #   resources :products do
  #     member do
  #       get 'short'
  #       post 'toggle'
  #     end
  #
  #     collection do
  #       get 'sold'
  #     end
  #   end

  # Example resource route with sub-resources:
  #   resources :products do
  #     resources :comments, :sales
  #     resource :seller
  #   end

  # Example resource route with more complex sub-resources:
  #   resources :products do
  #     resources :comments
  #     resources :sales do
  #       get 'recent', on: :collection
  #     end
  #   end

  # Example resource route within a namespace:
  #   namespace :admin do
  #     # Directs /admin/products/* to Admin::ProductsController
  #     # (app/controllers/admin/products_controller.rb)
  #     resources :products
  #   end
  # get 'users/sign_in' => 'application#index'
  # get 'users/sign_up' => 'application#index'
  get '/(*all)' => 'application#index'
end
