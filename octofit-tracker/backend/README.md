OctoFit Tracker — backend

Quick notes for local development.

Prerequisites
- Python 3.8+ installed.

Create and activate the virtual environment (one-time):

```bash
python3 -m venv /workspaces/skills-build-applications-w-copilot-agent-mode/octofit-tracker/backend/venv
source /workspaces/skills-build-applications-w-copilot-agent-mode/octofit-tracker/backend/venv/bin/activate
```

Install project requirements:

```bash
pip install -r /workspaces/skills-build-applications-w-copilot-agent-mode/octofit-tracker/backend/requirements.txt
```

Run migrations and start the dev server:

```bash
source /workspaces/skills-build-applications-w-copilot-agent-mode/octofit-tracker/backend/venv/bin/activate
python manage.py migrate
python manage.py runserver 0.0.0.0:8000
```

Notes
- The settings are minimal for local development (DEBUG=True). Update `octofit_tracker/settings.py` for production.
- The REST framework is wired in `INSTALLED_APPS` and browsable auth is available at `/api-auth/`.
