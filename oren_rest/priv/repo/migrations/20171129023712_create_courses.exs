defmodule OrenRest.Repo.Migrations.CreateCourses do
  use Ecto.Migration

  def change do
    create table(:courses) do
      add :name, :string
      add :description, :string

      timestamps()
    end

  end
end
