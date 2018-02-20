Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api do
    namespace :v1 do
      resources :categories do
        resources :comments, module: :categories
      end

      resources :posts do
        resources :comments, module: :posts
      end
    end
  end
end
