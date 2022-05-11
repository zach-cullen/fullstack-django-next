# Overrides the login method in allauth to prevent session cookie being sent at registration
from allauth.account.adapter import DefaultAccountAdapter

class DefaultAccountAdapterCustom(DefaultAccountAdapter):
  def login(self, request, user):
    del request.session