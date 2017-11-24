defmodule OrenRestWeb.Router do
  use OrenRestWeb, :router

  pipeline :api do
    plug :accepts, ["json"]
  end

  scope "/api", OrenRestWeb do
    pipe_through :api
  end
end
