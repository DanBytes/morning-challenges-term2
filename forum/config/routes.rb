Rails.application.routes.draw do
  get 'questions/create'
  resources :answers
  resources :questions
  # Go to home/index by default
  root 'home#index'
  # About page
  get '/about' => 'home#about'

   post '/questions' => 'questions#index'
  post '/answers' => 'home#temp'

  # get '/questions/:id' => 'home#question'
end
