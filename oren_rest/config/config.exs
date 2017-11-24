# This file is responsible for configuring your application
# and its dependencies with the aid of the Mix.Config module.
#
# This configuration file is loaded before any dependency and
# is restricted to this project.
use Mix.Config

# General application configuration
config :oren_rest,
  ecto_repos: [OrenRest.Repo]

# Configures the endpoint
config :oren_rest, OrenRestWeb.Endpoint,
  url: [host: "localhost"],
  secret_key_base: "Cl4IRUIsGFkKLTml2A25u7xtJHb/4SNjnQgXb3IHyrK1OVMDEmf/v8+ajLqcaesn",
  render_errors: [view: OrenRestWeb.ErrorView, accepts: ~w(json)],
  pubsub: [name: OrenRest.PubSub,
           adapter: Phoenix.PubSub.PG2]

# Configures Elixir's Logger
config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:request_id]

# Import environment specific config. This must remain at the bottom
# of this file so it overrides the configuration defined above.
import_config "#{Mix.env}.exs"
