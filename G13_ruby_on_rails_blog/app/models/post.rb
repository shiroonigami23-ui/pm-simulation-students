class Post < ApplicationRecord
  extend FriendlyId
  friendly_id :title, use: :slugged

  belongs_to :user
  has_many :comments, dependent: :destroy
  has_rich_text :body

  validates :title, presence: true, length: { maximum: 255 }
  validates :body,  presence: true

  scope :published, -> { where(published: true) }
  scope :recent,    -> { order(created_at: :desc) }

  def should_generate_new_friendly_id?
    title_changed? || super
  end
end
