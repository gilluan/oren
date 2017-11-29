defmodule OrenRest.Courses.Course do
  use Ecto.Schema
  import Ecto.Changeset
  alias OrenRest.Courses.Course


  schema "courses" do
    field :description, :string
    field :name, :string

    timestamps()
  end

  @doc false
  def changeset(%Course{} = course, attrs) do
    course
    |> cast(attrs, [:name, :description])
    |> validate_required([:name, :description])
  end
end
