# frozen_string_literal: true

json.extract! counter, :id, :name, :description, :deadline, :created_at, :updated_at
json.url counter_url(counter, format: :json)
