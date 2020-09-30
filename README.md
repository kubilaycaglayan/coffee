# ☕ COFFEE BEANS

#### Commands


- Open console in test environment
> `rails c -e test`

- Start server in test environment
> `rails s -e test`

- Reset test database
> `rails RAILS_ENV=test db:reset`

- Seed test database
> `rails RAILS_ENV=test db:seed`

- Show current database in rails console
> `ActiveRecord::Base.connection.current_database`