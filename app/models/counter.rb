# frozen_string_literal: true

class Counter < ApplicationRecord
  validate :not_past_deadline, on: :create
  validate :name, :presence

  def not_past_deadline
    errors.add(:deadline, "Can't be in the past") if deadline < DateTime.now
  end
end
