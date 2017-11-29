defmodule OrenRestWeb.Router do
  use OrenRestWeb, :router

  pipeline :api do
    plug :accepts, ["json"]
  end

  scope "/api", OrenRestWeb do
    pipe_through :api


    # Payload Example
    #{
    # "course": {
		#   "name": "name",
		#   "description": "description"
	  # }
    #}
    resources "/courses", CourseController, except: [:new, :edit]
  end
end
