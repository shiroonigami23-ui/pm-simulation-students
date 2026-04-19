class User < ApplicationRecord
  has_secure_password
  has_many :posts, dependent: :destroy

  validates :username, presence: true, uniqueness: true, length: { minimum: 3 }
  validates :email, presence: true, uniqueness: true,
            format: { with: URI::MailTo::EMAIL_REGEXP }
end
