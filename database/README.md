# Database

## Текущий механизм

Автоматических миграций (Flyway, Laravel, Doctrine) **нет**.

Схема управляется SQL-файлами:

| Файл | Назначение |
|------|------------|
| `schema.sql` | Базовая схема + seed skills (первый запуск Postgres в Docker) |
| `migrations/001_add_skills.sql` | Для уже существующей БД без таблицы skills |
| `migrations/003_projects_case_study.sql` | Расширение projects (image_url, github_url, technologies) |

## Первое развёртывание (Docker)

При пустом volume Postgres автоматически выполнит `schema.sql` из `docker-entrypoint-initdb.d`.

Проверка:

```bash
docker compose exec postgres psql -U "$DB_USER" -d "$DB_NAME" -c '\dt'
```

## Обновление схемы (вручную)

1. Создать новый файл `migrations/00N_description.sql`.
2. Применить на сервере:

```bash
docker compose exec -T postgres psql -U "$DB_USER" -d "$DB_NAME" < database/migrations/00N_description.sql
```

3. Зафиксировать файл в git.

**Не** подключать auto-migrate в CD без отдельного согласования.
