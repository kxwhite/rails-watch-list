class Bookmark < ApplicationRecord
  belongs_to :movie
  belongs_to :list
  validates :comment, length: { minimum: 6 }
  validates_uniqueness_of :list
  # validates_associated [:movie, :list], presence: true, uniqueness: true
  # validates_associated :list, uniqueness: true
  # validates :movie, uniqueness: true
end
