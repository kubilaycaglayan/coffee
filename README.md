# RAILS & REACT TEMPLATE

> Ready to deploy Heroku, Rails and React setup.

### Webpacker

- Activated with this command:
- `bundle exec rails webpacker:install:react`

https://github.com/rails/webpacker/blob/master/docs/integrations.md#react

### Routes

```ruby
  Rails.application.routes.draw do
    root 'pages#index'

    get '*path', to: 'pages#index', via: :all
  end
```

### Linters

- React linter activated for `/app/javascript` folder only.

### Tests

- `npm test`
