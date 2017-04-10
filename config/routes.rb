Rails.application.routes.draw do

  ActiveAdmin.routes(self)
  devise_for :admin_users, ActiveAdmin::Devise.config
  devise_for :users, controllers: {
    sessions: 'users/sessions',
    registrations: 'users/registrations'
  }

  scope module: :users do
    resources :profiles, only: [:update]
  end

  get 'users/signin' => 'application#index'
  resources :users, only: [:show] do
    scope module: :users do
      resource :relationship, only: [:create, :destroy] do
        get :following
        get :followers
      end
    end
    resources :posts, only: [:index]
    resources :comments, only: [:index]
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

  get '/(*all)' => 'application#index'
end
