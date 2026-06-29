// ── i18n ───────────────────────────────────────────────
const I18N = {
  en: {
    'tab.more': 'More',
    'more.language': 'Language', 'more.theme': 'Theme', 'more.drive': 'Google Drive',
    'more.section.settings': 'Settings',
    'sidebar.lists': 'Lists',
    'sidebar.meetings': 'Meetings', 'sidebar.releases': 'Releases',
    'sidebar.entries': 'Entries',
    'btn.add': '+ Add', 'btn.cancel': 'Cancel', 'btn.save_changes': 'Save Changes',
    'btn.edit': 'Edit', 'btn.delete': 'Delete',
    'btn.delete_project': 'Delete Project', 'btn.delete_list': 'Delete List',
    'btn.today': 'Today',
    'btn.add_project': 'Add Project', 'btn.add_list': 'Add List',
    'btn.add_task': 'Add Task', 'btn.add_visit': 'Add Visit',
    'btn.add_release': 'Add Release', 'btn.add_version': 'Add Version',
    'btn.add_issue': 'Add Issue', 'btn.add_meeting': 'Add Meeting',
    'modal.add_new_project': 'Add New Project', 'modal.add_new_list': 'Add New List',
    'modal.edit_project': 'Edit Project', 'modal.edit_list': 'Edit List',
    'modal.add_task': 'Add Task', 'modal.edit_task': 'Edit Task',
    'modal.add_visit': 'Add Visit', 'modal.edit_visit': 'Edit Visit',
    'modal.add_release': 'Add Release', 'modal.edit_release': 'Edit Release',
    'modal.add_version': 'Add Version', 'modal.edit_version': 'Edit Version',
    'modal.add_issue': 'Add Known Issue', 'modal.edit_issue': 'Edit Issue',
    'modal.add_meeting': 'Add Meeting', 'modal.edit_meeting': 'Edit Meeting',
    'label.project_name': 'Project Name *', 'label.list_name': 'List Name *',
    'label.task_title': 'Task Title *', 'label.priority': 'Priority',
    'label.status': 'Status', 'label.severity': 'Severity',
    'label.due_date': 'Due Date', 'label.tags': 'Tags',
    'label.description': 'Description', 'label.category': 'Category',
    'label.location': 'Location *', 'label.date': 'Date *',
    'label.reference': 'Reference', 'label.notes': 'Notes',
    'label.changes': 'Changes', 'label.release_code': 'Release Code *',
    'label.name': 'Name', 'label.project_platform': 'Project / Platform',
    'label.version': 'Version *', 'label.issue_title': 'Issue Title *',
    'label.title': 'Title *', 'label.location_platform': 'Location / Platform',
    'label.attendees': 'Attendees', 'label.related': 'Related Project',
    'label.filename': 'File name',
    'ph.project_name': 'e.g. Customer onboarding, Q4 launch...',
    'ph.list_name': 'e.g. Shopping, To read, Movies...',
    'ph.category': 'e.g. Work, Personal, Clients...',
    'ph.description': 'Scope, deliverables, stakeholders...',
    'ph.task_title': 'What needs to be done?',
    'ph.location': 'e.g. Korea, Seoul — Samsung HQ',
    'ph.reference': 'Project, customer, asset...',
    'ph.visit_notes': 'Purpose, agenda, team members...',
    'ph.release_code': 'REL-2024-001 / A33-200007-R001',
    'ph.short_name': 'Short name, e.g. Walker Motor Controller',
    'ph.fw_desc': 'Purpose, platform, details...',
    'ph.platform': 'e.g. Mobile app, Walker, Atlas...',
    'ph.version': 'A33-200007-R001-V002',
    'ph.changes_lines': '- Balance algorithm updated\n- Motor driver bug fixed\n- New sensor support added',
    'ph.cl_notes': 'Test notes, known issues...',
    'ph.issue_title': 'Briefly describe the issue...',
    'ph.meeting_title': 'Meeting topic...',
    'ph.meeting_loc': 'e.g. Teams, Office, Samsung HQ...',
    'ph.attendees': 'e.g. Batu, Ali, Mehmet...',
    'ph.related_project': 'e.g. Walker, KUKA...',
    'ph.note': 'Write a note... (Ctrl+Enter to save)',
    'ph.action_item': 'New action item... (Enter to add)',
    'ph.brainstorm_notes': 'Meeting notes, decisions, topics discussed...',
    'empty.select_list': 'Select a list from the sidebar\nor add a new one to get started.',
    'empty.select_release': 'Select a release or add a new one.',
    'empty.select_meeting': 'Select a meeting or add a new one.',
    'empty.no_projects': 'No projects yet',
    'empty.no_lists': 'No lists yet',
    'empty.no_releases': 'No releases yet',
    'empty.no_meetings': 'No meetings yet',
    'empty.no_visits': 'No visits planned yet.',
    'empty.no_versions': 'No versions yet.',
    'empty.no_tasks_yet': 'No tasks yet.',
    'empty.no_tasks_add': 'No tasks yet. Add your first task!',
    'all_tasks.title': 'All Tasks',
    'all_tasks.subtitle': 'Tasks across every list',
    'visits.title': 'Visits',
    'visits.subtitle': 'Planned visits and trips',
    'meetings.title': 'Meetings',
    'meetings.subtitle': 'Notes, decisions, action items',
    'btn.add_short': '+ Add',
    'btn.add_meeting': '+ Add Meeting',
    'cross.today': 'Today', 'cross.calendar': 'Calendar', 'cross.all_tasks': 'All Tasks', 'cross.visits': 'Visits',
    'nav.spaces': 'Spaces',
    'task.tasks_label': 'Tasks',
    'task.issues_label': 'Known Issues',
    'task.actions_label': 'Action Items',
    'task.notes_label': 'Notes',
    'task.changelog_label': 'Changelog',
    'count.actions_short': '{open} action',
    'meeting.notes_label': 'Notes',
    'space.name_prompt': 'Space name:',
    'label.space': 'Space',
    'empty.no_issues': 'No issues recorded.',
    'empty.no_notes': 'No notes yet.',
    'empty.select_day': 'Select a day',
    'cal.meetings': 'Meetings', 'cal.visits': 'Visits', 'cal.notes': 'Notes',
    'cal.notes_placeholder': 'Add a note for this day...',
    'bp.title': 'Cloud Backup',
    'bp.subtitle_detected': 'Drive detected — connect in one click',
    'bp.connect_button': 'Connect to Google Drive',
    'bp.no_drive_title': 'Google Drive not found.',
    'bp.no_drive_desc': 'For automatic sync, install Google Drive Desktop.',
    'bp.install_drive': 'Install Google Drive',
    'bp.install_link': 'google.com/drive/download',
    'bp.manual_folder': 'Choose folder manually',
    'bp.or_manual_folder': 'Or choose folder manually',
    'bp.hint_drive': 'Files are written to a "B-Less" folder in Drive and synced automatically.',
    'bp.hint_install': 'After installing Drive and signing in, reopen the app — it will auto-detect.',
    'bp.last_sync': 'Last sync',
    'bp.never': 'Never',
    'bp.just_now': 'Just now',
    'bp.min_ago': '{n} min ago',
    'bp.backup_now': 'Backup Now',
    'bp.restore': 'Restore',
    'bp.disconnect': 'Disconnect',
    'bp.disconnect_confirm': 'Disconnect? Data stays local, sync stops.',
    'bp.no_backup_found': 'No backup file found in folder.',
    'bp.connect_failed': 'Could not connect: {msg}',
    'bp.restore_overwrite': 'Backup found ({date}, {n} project(s)).\n\nOverwrite existing data?',
    'bp.restore_load': 'Backup found ({date}, {n} project(s)).\n\nLoad data?',
    'bp.open_folder': 'Open folder',
    'att.section': 'Attachments',
    'att.add': 'Attach file',
    'att.empty': 'No attachments',
    'att.too_big': '"{name}" is too large ({size}). Max is {max}.',
    'att.upload_title': 'Upload attachments',
    'att.upload_confirm': 'Upload {count} file(s) to Google Drive?\nTotal size: {size}\n\n{files}',
    'att.upload_ok': 'Upload',
    'att.too_big_title': 'File too large',
    'drive.storage_full_title': 'Drive storage may be full',
    'drive.storage_full_msg': 'Google Drive could not save this because the account storage looks full. Free up Drive/Gmail/Photos storage or remove large B-Less attachments, then try again.',
    'drive.bless_storage': 'B-Less storage',
    'drive.total_storage': 'Drive storage',
    'drive.checking': 'Checking...',
    'drive.not_checked': 'Not checked yet',
    'att.confirm_delete': 'Delete this attachment?',
    'att.desktop_only': 'Attachments work in the desktop app only.',
    'att.signin_required': 'Sign in to Google Drive to attach files.',
    'att.failed': 'Could not save: {msg}',
    'reviews.title':         'Reviews',
    'reviews.subtitle':      'Weekly & monthly summary notes',
    'reviews.tab.week':      'Weekly',
    'reviews.tab.month':     'Monthly',
    'reviews.current_week':  'This week',
    'reviews.current_month': 'This month',
    'reviews.empty':         'No entries yet. Click the button above to start one.',
    'reviews.no_entry':      'No entry selected',
    'reviews.confirm_delete':'Delete this summary?',
    'reviews.saved':         'Saved',
    'reviews.week_label':    'Week',
    'reviews.placeholder':   'Wins, blockers, things to revisit, lessons…',
    'reviews.goals':         'Goals',
    'reviews.goals_ph':      'Add a goal…',
    'reviews.goals_add':     'Add',
    'reviews.completed':     'Completed this week',
    'reviews.no_goals':      'No goals yet.',
    'reviews.no_completed':  'No tasks completed this week.',
    'reviews.notes':         'Notes',
    'reviews.empty_entry':   'Empty',
    'reviews.words':         '{n} words',
    'reviews.current_badge': 'Current',
    'reviews.space_goals':   'Space Goals',
    'reviews.space_goals_ph':'Add a space goal…',
    'reviews.no_space_goals':'No space goals yet.',
    'reviews.space_select':  'Space:',
    'btn.weekly_goal':       'Goal',
    'more.section.tools': 'Tools',
  },
  tr: {
    'tab.more': 'Daha',
    'more.language': 'Dil', 'more.theme': 'Tema', 'more.drive': 'Google Drive',
    'more.section.settings': 'Ayarlar',
    'sidebar.lists': 'Listeler',
    'sidebar.meetings': 'Toplantılar', 'sidebar.releases': 'Sürümler',
    'sidebar.entries': 'Girdiler',
    'btn.add': '+ Ekle', 'btn.cancel': 'İptal', 'btn.save_changes': 'Kaydet',
    'btn.edit': 'Düzenle', 'btn.delete': 'Sil',
    'btn.delete_project': 'Projeyi Sil', 'btn.delete_list': 'Listeyi Sil',
    'btn.today': 'Bugün',
    'btn.add_project': 'Proje Ekle', 'btn.add_list': 'Liste Ekle',
    'btn.add_task': 'Görev Ekle', 'btn.add_visit': 'Ziyaret Ekle',
    'btn.add_release': 'Sürüm Ekle', 'btn.add_version': 'Versiyon Ekle',
    'btn.add_issue': 'Sorun Ekle', 'btn.add_meeting': 'Toplantı Ekle',
    'modal.add_new_project': 'Yeni Proje', 'modal.add_new_list': 'Yeni Liste',
    'modal.edit_project': 'Projeyi Düzenle', 'modal.edit_list': 'Listeyi Düzenle',
    'modal.add_task': 'Görev Ekle', 'modal.edit_task': 'Görevi Düzenle',
    'modal.add_visit': 'Ziyaret Ekle', 'modal.edit_visit': 'Ziyareti Düzenle',
    'modal.add_release': 'Sürüm Ekle', 'modal.edit_release': 'Sürümü Düzenle',
    'modal.add_version': 'Versiyon Ekle', 'modal.edit_version': 'Versiyonu Düzenle',
    'modal.add_issue': 'Sorun Ekle', 'modal.edit_issue': 'Sorunu Düzenle',
    'modal.add_meeting': 'Toplantı Ekle', 'modal.edit_meeting': 'Toplantıyı Düzenle',
    'label.project_name': 'Proje Adı *', 'label.list_name': 'Liste Adı *',
    'label.task_title': 'Görev *', 'label.priority': 'Öncelik',
    'label.status': 'Durum', 'label.severity': 'Önem',
    'label.due_date': 'Bitiş Tarihi', 'label.tags': 'Etiketler',
    'label.description': 'Açıklama', 'label.category': 'Kategori',
    'label.location': 'Konum *', 'label.date': 'Tarih *',
    'label.reference': 'Referans', 'label.notes': 'Notlar',
    'label.changes': 'Değişiklikler', 'label.release_code': 'Sürüm Kodu *',
    'label.name': 'İsim', 'label.project_platform': 'Proje / Platform',
    'label.version': 'Versiyon *', 'label.issue_title': 'Sorun Başlığı *',
    'label.title': 'Başlık *', 'label.location_platform': 'Yer / Platform',
    'label.attendees': 'Katılımcılar', 'label.related': 'İlgili Proje',
    'label.filename': 'Dosya adı',
    'ph.project_name': 'Örn. Müşteri onboarding, Q4 launch...',
    'ph.list_name': 'Örn. Alışveriş, Okunacaklar, Filmler...',
    'ph.category': 'Örn. İş, Kişisel, Müşteriler...',
    'ph.description': 'Kapsam, çıktılar, paydaşlar...',
    'ph.task_title': 'Ne yapılacak?',
    'ph.location': 'Örn. Kore, Seul — Samsung HQ',
    'ph.reference': 'Proje, müşteri, varlık...',
    'ph.visit_notes': 'Amaç, gündem, ekip...',
    'ph.release_code': 'REL-2024-001 / A33-200007-R001',
    'ph.short_name': 'Kısa ad, örn. Walker Motor Controller',
    'ph.fw_desc': 'Amaç, platform, detay...',
    'ph.platform': 'Örn. Mobil uygulama, Walker, Atlas...',
    'ph.version': 'A33-200007-R001-V002',
    'ph.changes_lines': '- Denge algoritması güncellendi\n- Motor sürücü hatası düzeltildi\n- Yeni sensör desteği eklendi',
    'ph.cl_notes': 'Test notları, bilinen sorunlar...',
    'ph.issue_title': 'Sorunu kısaca tanımla...',
    'ph.meeting_title': 'Toplantı konusu...',
    'ph.meeting_loc': 'Örn. Teams, Ofis, Samsung HQ...',
    'ph.attendees': 'Örn. Batu, Ali, Mehmet...',
    'ph.related_project': 'Örn. Walker, KUKA...',
    'ph.note': 'Not yaz... (Ctrl+Enter ile kaydet)',
    'ph.action_item': 'Yeni aksiyon... (Enter ile ekle)',
    'ph.brainstorm_notes': 'Toplantı notları, kararlar, konuşulanlar...',
    'empty.select_list': 'Sol taraftan bir liste seç\nveya yeni bir liste ekle.',
    'empty.select_release': 'Bir sürüm seç veya yeni ekle.',
    'empty.select_meeting': 'Bir toplantı seç veya yeni ekle.',
    'empty.no_projects': 'Henüz proje yok',
    'empty.no_lists': 'Henüz liste yok',
    'empty.no_releases': 'Henüz sürüm yok',
    'empty.no_meetings': 'Henüz toplantı yok',
    'empty.no_visits': 'Henüz planlanmış ziyaret yok.',
    'empty.no_versions': 'Henüz versiyon yok.',
    'empty.no_tasks_yet': 'Henüz görev yok.',
    'empty.no_tasks_add': 'Henüz görev yok. İlk görevini ekle!',
    'empty.no_issues': 'Kayıtlı sorun yok.',
    'empty.no_notes': 'Henüz not yok.',
    'empty.select_day': 'Bir gün seç',
    'cal.meetings': 'Toplantılar', 'cal.visits': 'Ziyaretler', 'cal.notes': 'Notlar',
    'cal.notes_placeholder': 'Bu güne ait not...',
    'bp.title': 'Bulut Yedekleme',
    'bp.subtitle_detected': 'Drive bulundu — tek tıkla bağlan',
    'bp.connect_button': 'Google Drive\'a Bağlan',
    'bp.no_drive_title': 'Google Drive bulunamadı.',
    'bp.no_drive_desc': 'Otomatik sync için Google Drive Desktop kurman lazım.',
    'bp.install_drive': 'Google Drive\'ı indir',
    'bp.install_link': 'google.com/drive/download',
    'bp.manual_folder': 'Manuel klasör seç',
    'bp.or_manual_folder': 'Veya manuel klasör seç',
    'bp.hint_drive': 'Veriler Drive\'da "B-Less" klasörüne yazılır, otomatik senkronize olur.',
    'bp.hint_install': 'Drive\'ı kurup, oturum açıp sync klasörü oluştuktan sonra uygulamayı yeniden aç.',
    'bp.last_sync': 'Son yedek',
    'bp.never': 'Henüz yok',
    'bp.just_now': 'Az önce',
    'bp.min_ago': '{n} dk önce',
    'bp.backup_now': 'Yedekle',
    'bp.restore': 'Geri Yükle',
    'bp.disconnect': 'Bağlantıyı Kes',
    'bp.disconnect_confirm': 'Bağlantıyı kes? Veriler local kalır, sync durur.',
    'bp.no_backup_found': 'Klasörde yedek dosyası bulunamadı.',
    'bp.connect_failed': 'Bağlanamadı: {msg}',
    'bp.restore_overwrite': 'Yedek bulundu ({date}, {n} proje).\n\nMevcut verilerin üzerine yazılsın mı?',
    'bp.restore_load': 'Yedek bulundu ({date}, {n} proje).\n\nVeriler yüklensin mi?',
    'bp.open_folder': 'Klasörü aç',
    'att.section': 'Ekler',
    'att.add': 'Dosya ekle',
    'att.empty': 'Ek yok',
    'att.too_big': '"{name}" çok büyük (max 25 MB)',
    'att.confirm_delete': 'Bu eki sil?',
    'att.desktop_only': 'Ekler sadece masaüstü uygulamada çalışır.',
    'att.signin_required': 'Dosya eklemek için Google Drive\'a giriş yap.',
    'att.failed': 'Kaydedilemedi: {msg}',
    'cross.today': 'Bugün', 'cross.calendar': 'Takvim', 'cross.all_tasks': 'Tüm Görevler', 'cross.visits': 'Ziyaretler',
    'nav.spaces': 'Alanlar',
    'btn.add_short': '+ Ekle',
    'btn.save': 'Kaydet',
    'btn.today_star': '★ Bugün',
    'btn.add_to_today': '☆ Bugüne al',
    'btn.start_today_title': 'Bugün başla',
    'btn.remove_today_title': 'Bugünden kaldır',
    'aria.delete': 'Sil',
    'aria.completed': 'Tamamlandı',
    'ph.note_input': 'Not yaz... (Ctrl+Enter ile kaydet)',
    'due.today': 'bugün', 'due.tomorrow': 'yarın', 'due.yesterday': 'dün',
    'due.days_from_now': '{n}g sonra', 'due.days_ago': '{n}g geçti',
    'months.short': 'Oca,Şub,Mar,Nis,May,Haz,Tem,Ağu,Eyl,Eki,Kas,Ara',
    'meeting.notes_label': 'Notlar',
    'space.name_prompt': 'Space adı:',
    'label.space': 'Alan',
    'bp.sign_in': 'Google ile giriş yap',
    'bp.sign_out': 'Çıkış yap',
    'bp.signed_in_as': 'Bağlı hesap',
    'bp.web_subtitle': 'Google Drive\'ına yedek almak için giriş yap.',
    'bp.web_hint': 'Veriler Drive\'ında özel bir "B-Less" klasörüne yazılır. Masaüstü uygulamayı açtığında aynı dosyaları görürsün.',
    'bp.signing_in': 'Giriş yapılıyor…',
    'bp.sign_in_failed': 'Giriş başarısız: {msg}',
    'bp.desktop_only': 'Sadece masaüstü uygulamada çalışır.',
    'bp.filename': 'Dosya',
    'bp.rename': 'Yeniden adlandır',
    'bp.rename_prompt': 'Yeni yedek dosyası adı (mevcut dosya da yeniden adlandırılır):',
    'bp.custom_folder': 'Özel klasör',
    'bp.set_up': 'Yedek kur',
    'conf.delete_project': 'Bu projeyi ve tüm verilerini sil?',
    'conf.delete_list': 'Bu listeyi ve tüm verilerini sil?',
    'conf.delete_task': 'Bu görevi sil?',
    'conf.delete_release': 'Bu sürümü sil?',
    'conf.delete_meeting': 'Bu toplantıyı sil?',
    'conf.delete_visit': 'Bu ziyareti sil?',
    'conf.delete_issue': 'Bu sorunu sil?',
    'count.tasks_one': '1 aktif görev',
    'count.tasks_other': '{n} aktif görev',
    'count.tasks_zero': 'Aktif görev yok',
    'count.actions_short': '{open} aksiyon',
    'count.versions_one': '1 versiyon',
    'count.versions_other': '{n} versiyon',
    'count.open': '{n} açık',
    'task.tasks_label': 'Görevler',
    'task.issues_label': 'Bilinen Sorunlar',
    'task.actions_label': 'Aksiyon Maddeleri',
    'task.notes_label': 'Notlar',
    'task.changelog_label': 'Değişiklik Geçmişi',
    'btn.done': 'Tamam', 'btn.reopen': 'Yeniden Aç', 'btn.pending': 'Beklemede',
    'btn.activate': 'Aktifleştir', 'btn.investigating': 'İnceleniyor',
    'btn.resolved': 'Çözüldü',
    'visits.title': 'Ziyaretler', 'visits.subtitle': 'Planlanan ziyaretler ve seyahatler',
    'all_tasks.title': 'Tüm Görevler',
    'all_tasks.subtitle': 'Tüm projelerden görevler',
    'note.add': '+ Ekle', 'note.empty': 'Henüz not yok.',
    'days.future': '{n} gün sonra', 'days.past': '{n} gün önce', 'days.today': 'Bugün!',
    'priority.normal': 'Normal', 'priority.high': 'Yüksek', 'priority.critical': 'Kritik', 'priority.low': 'Düşük', 'priority.medium': 'Orta',
    'status.active': 'Aktif', 'status.pending': 'Beklemede', 'status.done': 'Tamam',
    'status.open': 'Açık', 'status.investigating': 'İnceleniyor', 'status.resolved': 'Çözüldü',
    'status.testing': 'Test', 'status.rc': 'RC', 'status.stable': 'Kararlı', 'status.deprecated': 'Eski',
  },
};

// Backfill English strings for keys that historically only existed on TR.
// Without these, t() falls through to the TR value (the safety net in t())
// and Turkish leaks into the English UI.
Object.assign(I18N.en, {
  'bp.filename':       'File',
  'bp.rename':         'Rename',
  'bp.rename_prompt':  'New backup file name (the existing file will also be renamed):',
  'bp.sign_in':        'Sign in with Google',
  'bp.sign_out':       'Sign out',
  'bp.signed_in_as':   'Connected account',
  'bp.web_subtitle':   'Sign in to back up to your Google Drive.',
  'bp.web_hint':       'Files are written to a private "B-Less" folder in your Drive and synced automatically.',
  'bp.signing_in':     'Signing in…',
  'bp.sign_in_failed': 'Sign-in failed: {msg}',
  'bp.desktop_only':   'Only works in the desktop app.',
  'bp.custom_folder':  'Custom folder',
  'bp.set_up':         'Set up backup',
  'btn.save':        'Save',
  'btn.today_star':  '★ Today',
  'btn.add_to_today': '☆ Add to today',
  'btn.start_today_title':  'Start today',
  'btn.remove_today_title': 'Remove from today',
  'aria.delete':     'Delete',
  'aria.completed':  'Completed',
  'ph.note_input':   'Write a note… (Ctrl+Enter to save)',
  'due.today':       'today',
  'due.tomorrow':    'tomorrow',
  'due.yesterday':   'yesterday',
  'due.days_from_now': 'in {n}d',
  'due.days_ago':      '{n}d ago',
  'months.short':    'Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec',
  'conf.delete_project': 'Delete this project and all its data?',
  'conf.delete_list':    'Delete this list and all its data?',
  'conf.delete_task':    'Delete this task?',
  'conf.delete_release': 'Delete this release?',
  'conf.delete_meeting': 'Delete this meeting?',
  'conf.delete_visit':   'Delete this visit?',
  'conf.delete_issue':   'Delete this issue?',
  'count.tasks_zero':  'No active tasks',
  'count.tasks_one':   '1 active task',
  'count.tasks_other': '{n} active tasks',
  'count.versions_one':   '1 version',
  'count.versions_other': '{n} versions',
  'count.open':           '{n} open',
  'btn.done':          'Done',
  'btn.reopen':        'Reopen',
  'btn.pending':       'Pending',
  'btn.activate':      'Activate',
  'btn.investigating': 'Investigating',
  'btn.resolved':      'Resolved',
  'note.add':          '+ Add',
  'note.empty':        'No notes yet.',
  'days.future':       'in {n}d',
  'days.past':         '{n}d ago',
  'days.today':        'Today!',
  'priority.normal':   'Normal',
  'priority.high':     'High',
  'priority.critical': 'Critical',
  'priority.low':      'Low',
  'priority.medium':   'Medium',
  'status.active':        'Active',
  'status.pending':       'Pending',
  'status.done':          'Done',
  'status.open':          'Open',
  'status.investigating': 'Investigating',
  'status.resolved':      'Resolved',
  'status.testing':       'Testing',
  'status.rc':            'RC',
  'status.stable':        'Stable',
  'status.deprecated':    'Deprecated',
});

Object.assign(I18N.tr, {
  'att.too_big': '"{name}" cok buyuk ({size}). Maksimum {max}.',
  'att.upload_title': 'Ekleri yukle',
  'att.upload_confirm': '{count} dosya Google Drive\'a yuklensin mi?\nToplam boyut: {size}\n\n{files}',
  'att.upload_ok': 'Yukle',
  'att.too_big_title': 'Dosya cok buyuk',
  'drive.storage_full_title': 'Drive alani dolu olabilir',
  'drive.storage_full_msg': 'Google Drive bu veriyi kaydedemedi; hesap depolama alani dolu gorunuyor. Drive/Gmail/Photos alanini bosalt veya buyuk B-Less eklerini sil, sonra tekrar dene.',
  'drive.bless_storage': 'B-Less alani',
  'drive.total_storage': 'Drive alani',
  'drive.checking': 'Kontrol ediliyor...',
  'drive.not_checked': 'Henuz kontrol edilmedi',
  'reviews.title':         'Ozetler',
  'reviews.subtitle':      'Haftalik ve aylik ozet notlar',
  'reviews.tab.week':      'Haftalik',
  'reviews.tab.month':     'Aylik',
  'reviews.current_week':  'Bu hafta',
  'reviews.current_month': 'Bu ay',
  'reviews.empty':         'Henuz kayit yok. Yukaridaki butonla baslat.',
  'reviews.no_entry':      'Kayit secili degil',
  'reviews.confirm_delete':'Bu ozet silinsin mi?',
  'reviews.saved':         'Kaydedildi',
  'reviews.week_label':    'Hafta',
  'reviews.placeholder':   'Kazanimlar, takiliklar, dersler, bir sonraki adim…',
  'reviews.goals':         'Kişisel Hedefler',
  'reviews.goals_ph':      'Hedef ekle…',
  'reviews.goals_add':     'Ekle',
  'reviews.completed':     'Bu hafta tamamlananlar',
  'reviews.no_goals':      'Henüz hedef eklenmedi.',
  'reviews.no_completed':  'Bu hafta tamamlanan task yok.',
  'reviews.notes':         'Notlar',
  'reviews.empty_entry':   'Boş',
  'reviews.words':         '{n} kelime',
  'reviews.current_badge': 'Güncel',
  'reviews.space_goals':   'Space Hedefleri',
  'reviews.space_goals_ph':'Space hedefi ekle…',
  'reviews.no_space_goals':'Henüz space hedefi yok.',
  'reviews.space_select':  'Space:',
  'btn.weekly_goal':       'Hedef',
  'more.section.tools': 'Araclar',
});

// One-shot migration: copy any `karta-*` localStorage entries (from the previous
// app name) to the new `b-less-*` keys. Idempotent — the copy is skipped if the
// new key is already present, so re-running this on every load is safe.
(() => {
  const suffixes = ['', '-lang', '-theme', '-drive-user', '-backup-filename'];
  for (const suf of suffixes) {
    try {
      const oldKey = 'karta' + suf;
      const newKey = 'b-less' + suf;
      const v = localStorage.getItem(oldKey);
      if (v != null && localStorage.getItem(newKey) == null) {
        localStorage.setItem(newKey, v);
      }
    } catch {}
  }
})();

let currentLang = 'en';

function t(key, params) {
  // Fall back: current lang → en → tr → key. Many strings only have a tr
  // translation (the app started Turkish-first), so for now showing the
  // tr text is better than showing the literal key on the EN locale.
  let s = (I18N[currentLang] && I18N[currentLang][key])
       ?? I18N.en[key]
       ?? I18N.tr[key]
       ?? key;
  if (params) {
    for (const k in params) s = s.replace(new RegExp('\\{' + k + '\\}', 'g'), params[k]);
  }
  return s;
}

function applyI18n() {
  document.documentElement.setAttribute('lang', currentLang);
  document.body.setAttribute('data-lang', currentLang);
  document.querySelectorAll('[data-i18n]').forEach(el => { el.textContent = t(el.dataset.i18n); });
  document.querySelectorAll('[data-i18n-ph]').forEach(el => { el.placeholder = t(el.dataset.i18nPh); });
  document.querySelectorAll('[data-i18n-title]').forEach(el => { el.title = t(el.dataset.i18nTitle); });
  if (typeof renderAll === 'function') renderAll();
  if (typeof BackupManager !== 'undefined' && BackupManager.refresh) BackupManager.refresh();
}

function setLang(l) {
  currentLang = l;
  localStorage.setItem('b-less-lang', l);
  document.querySelectorAll('.lang-btn').forEach(b => b.classList.toggle('active', b.dataset.lang === l));
  applyI18n();
}

// ── ICONS (Lucide-style) ───────────────────────────────
const ICO = {
  bot:        '<svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>',
  botLg:      '<svg viewBox="0 0 24 24" width="40" height="40" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>',
  clipboard:  '<svg viewBox="0 0 24 24" width="40" height="40" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2 2 7l10 5 10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>',
  plane:      '<svg viewBox="0 0 24 24" width="40" height="40" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><path d="m22 2-7 20-4-9-9-4z"/><path d="M22 2 11 13"/></svg>',
  chip:       '<svg viewBox="0 0 24 24" width="40" height="40" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><path d="m3.27 6.96 8.73 5.05 8.73-5.05"/><path d="M12 22.08V12"/></svg>',
  users:      '<svg viewBox="0 0 24 24" width="40" height="40" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
  usersAvatar:'<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
  pin:        '<svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s-7-7-7-13a7 7 0 1 1 14 0c0 6-7 13-7 13z"/><circle cx="12" cy="9" r="2.5"/></svg>',
  calendar:   '<svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>',
  group:      '<svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
  close:      '<svg viewBox="0 0 24 24" width="11" height="11" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18M6 6l12 12"/></svg>',
  check:      '<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>',
  checkSm:    '<svg viewBox="0 0 24 24" width="11" height="11" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>',
  chevron:    '<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>',
  search:     '<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/></svg>',
  undo:       '<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7v6h6"/><path d="M21 17a9 9 0 0 0-15-6.7L3 13"/></svg>',
  pause:      '<svg viewBox="0 0 24 24" width="11" height="11" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/></svg>',
  play:       '<svg viewBox="0 0 24 24" width="11" height="11" fill="currentColor" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M6 4 20 12 6 20Z"/></svg>',
  folder:     '<svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>',
};

// ── STATE ──────────────────────────────────────────────
// state.firmware (and state.currentFwId) may still exist in old saves/backups; we leave the data
// dormant so a restore doesn't lose it, but no UI surface reads it anymore.
let state = { robots: [], topics: [], fieldVisits: [], firmware: [], meetings: [], reviews: { week: {}, month: {} }, templates: [], currentRobotId: null, currentTopicId: null, currentMeetingId: null };
let robotTab = 'tasks'; // 'tasks' | 'issues'
let topicTab = 'tasks';
let activeSection    = 'robots'; // 'robots' | 'topics'
let addingEntityType = 'robot';  // 'robot' | 'topic'
let editingVisitId     = null;
let editingRobotId     = null;
let editingTaskId      = null;
let editingIssueId     = null;
let editingMeetingId   = null;
let reviewPeriod = 'week';   // 'week' | 'month'
let currentReviewKey = null; // e.g. '2026-W19' or '2026-05'

// Build version — bump alongside SW VERSION in sw.js so the popover
// footer and #more-version stay in step. `var` (not const) so functions
// that fire during boot via applyI18n can reference it before script
// execution reaches the assignment.
var APP_VERSION = '7.12.54';

const STORAGE_KEY = 'b-less';
const SHARED_ACTIVITY_KEY = 'b-less.shared-activity';
const PENDING_SYNC_KEY = 'b-less.pending-sync';
const RESTORE_SAFETY_KEY = 'b-less.restore-safety-backup';
// Two layers of legacy: 'karta' was the previous app name, 'ais-planner' the one before.
const LEGACY_STORAGE_KEY = 'karta';
const OLDEST_STORAGE_KEY = 'ais-planner';

function load() {
  try {
    // Prefer new key, walk back through legacy keys if only an older one exists
    let raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      const fallback = localStorage.getItem(LEGACY_STORAGE_KEY) ||
                       localStorage.getItem(OLDEST_STORAGE_KEY);
      if (fallback) {
        localStorage.setItem(STORAGE_KEY, fallback);
        raw = fallback;
      }
    }
    if (raw) state = JSON.parse(raw) || state;
  } catch(e) {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw && !localStorage.getItem(STORAGE_KEY + '.corrupt')) {
        localStorage.setItem(STORAGE_KEY + '.corrupt', raw);
      }
    } catch(_) {}
    window.__bLessLoadFailed = true;
    alertDialog({ title: 'Could not load data', message: 'Saved planner data could not be loaded. The broken local copy was preserved as "b-less.corrupt"; restore from Google Drive or export it before making changes.' });
  }
  migrateLegacyTopics();
}

// Merge old `state.topics` (Areas tab) into `state.robots` with category="Notes"
// One-shot: idempotent because state.topics ends up empty
function migrateLegacyTopics() {
  if (!state.topics || state.topics.length === 0) return;
  state.topics.forEach(topic => {
    state.robots.push({
      ...topic,
      id: topic.id || uid(),
      category: topic.category || 'Notes',
      tasks:  topic.tasks  || [],
      issues: topic.issues || [],
    });
  });
  state.topics = [];
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); } catch(e) {}
}
function save() {
  if (window.__bLessLoadFailed) return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  if (typeof refreshInboxBadge === 'function') refreshInboxBadge();
  if (typeof BackupManager !== 'undefined') BackupManager.onDataChange();
}
function uid() {
  return Date.now().toString(36) + Math.random().toString(36).slice(2);
}

// Smart-merge timestamps — stamped on every mutating user action so the
// shared-space merge can pick the newer side per task / per list.
function stampTask(task) {
  if (task) task.updatedAt = Date.now();
}
function stampRobot(robot) {
  if (robot) robot.updatedAt = Date.now();
}
function stampMeeting(m) {
  if (m) m.updatedAt = Date.now();
}
function stampVisit(v) {
  if (v) v.updatedAt = Date.now();
}

// Tiny toast that fades in/out — used to surface non-blocking events
// like a shared-space merge happening in the background.
let _toastTimer = null;
function showAppToast(message, kind) {
  let host = document.getElementById('app-toast');
  if (!host) {
    host = document.createElement('div');
    host.id = 'app-toast';
    host.className = 'app-toast';
    host.setAttribute('role', 'status');
    host.setAttribute('aria-live', 'polite');
    document.body.appendChild(host);
  }
  host.textContent = message;
  host.dataset.kind = kind || 'info';
  host.classList.add('open');
  if (_toastTimer) clearTimeout(_toastTimer);
  _toastTimer = setTimeout(() => host.classList.remove('open'), 4200);
}

function showSyncToast(stats, spaceName) {
  const bits = [];
  if (stats.remoteAdded)     bits.push(`+${stats.remoteAdded} added by others`);
  if (stats.localSuperseded) bits.push(`${stats.localSuperseded} of your edits superseded`);
  if (stats.localKept)       bits.push(`${stats.localKept} of your changes preserved`);
  if (!bits.length) return;
  showAppToast(`Synced "${spaceName || 'Space'}" — ${bits.join(', ')}.`, 'sync');
}


function loadPendingSync() {
  try {
    const list = JSON.parse(localStorage.getItem(PENDING_SYNC_KEY) || '[]');
    return Array.isArray(list) ? list : [];
  } catch { return []; }
}

function savePendingSync(list) {
  try { localStorage.setItem(PENDING_SYNC_KEY, JSON.stringify(list.slice(-120))); } catch {}
  if (typeof renderPendingSyncIndicator === 'function') renderPendingSyncIndicator();
}

function markPendingSync(spaceId, reason) {
  if (!spaceId) return;
  const list = loadPendingSync();
  const existing = list.find(item => item.spaceId === spaceId);
  if (existing) {
    existing.count = (existing.count || 1) + 1;
    existing.reason = reason || existing.reason || 'Local change';
    existing.at = Date.now();
  } else {
    list.push({ id: uid(), spaceId, reason: reason || 'Local change', count: 1, at: Date.now() });
  }
  savePendingSync(list);
}

function clearPendingSync(spaceId) {
  if (!spaceId) return;
  savePendingSync(loadPendingSync().filter(item => item.spaceId !== spaceId));
}

function pendingSyncCount(spaceId) {
  const list = loadPendingSync();
  const relevant = spaceId ? list.filter(item => item.spaceId === spaceId) : list;
  return relevant.reduce((sum, item) => sum + (item.count || 1), 0);
}

function renderPendingSyncIndicator() {
  const root = document.getElementById('pending-sync-indicator');
  if (!root) return;
  const count = pendingSyncCount();
  if (!count) {
    root.hidden = true;
    root.innerHTML = '';
    updateSyncSafetyBar();
    return;
  }
  root.hidden = false;
  root.innerHTML = `
    <span class="pending-sync-dot"></span>
    <span>${count} change${count === 1 ? '' : 's'} waiting to sync</span>
  `;
  updateSyncSafetyBar();
}


function updateSyncSafetyBar() {
  const bar = document.getElementById('sync-safety-bar');
  if (!bar) return;
  const visible = Array.from(bar.children).some(el => !el.hidden);
  bar.hidden = !visible;
}

function saveRestoreSafetySnapshot() {
  const payload = {
    savedAt: new Date().toISOString(),
    data: state,
    extras: {},
  };
  try { localStorage.setItem(RESTORE_SAFETY_KEY, JSON.stringify(payload)); } catch {}
  return payload;
}

function getRestoreSafetySnapshot() {
  try { return JSON.parse(localStorage.getItem(RESTORE_SAFETY_KEY) || 'null'); }
  catch { return null; }
}

function collectAttachments() {
  const out = [];
  const add = (type, owner, attachments) => {
    (attachments || []).forEach(a => out.push({
      type,
      ownerId: owner && owner.id,
      ownerTitle: owner && (owner.title || owner.name || owner.location || owner.email || owner.id),
      filename: a.filename,
      originalName: a.originalName || a.filename,
      size: a.size || 0,
      addedAt: a.addedAt || 0,
    }));
  };
  (state.robots || []).forEach(r => {
    add('task-list', r, r.attachments);
    (r.tasks || []).forEach(t => add('task', t, t.attachments));
    (r.issues || []).forEach(i => add('issue', i, i.attachments));
  });
  (state.meetings || []).forEach(m => add('meeting', m, m.attachments));
  (state.fieldVisits || []).forEach(v => add('visit', v, v.attachments));
  return out.sort((a, b) => (b.size || 0) - (a.size || 0));
}


// ── TABS ───────────────────────────────────────────────
// Sub-pages reachable from "More" — when one is active, keep "More" highlighted
// in the bottom nav so the user has a clear way back.
const MORE_SUBTABS = new Set(['meetings', 'reviews']);

document.querySelectorAll('.tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
    tab.classList.add('active');
    const sec = document.getElementById(tab.dataset.tab);
    if (sec) sec.classList.add('active');
    if (tab.dataset.tab === 'robots' || tab.dataset.tab === 'topics') {
      activeSection = tab.dataset.tab;
    }
    if (tab.dataset.tab === 'calendar')   renderCalendar();
    if (tab.dataset.tab === 'all-tasks')  renderAllTasks();
    if (tab.dataset.tab === 'reviews')    { refreshAllSharedSpaces(); startReviewsPoll(); }
    if (MORE_SUBTABS.has(tab.dataset.tab)) {
      setBottomNavActive('more');
    } else {
      setBottomNavActive(tab.dataset.tab);
    }
    closeSpaceDrawer();
  });
});

function setBottomNavActive(key) {
  document.querySelectorAll('.bnav-btn').forEach(btn => {
    const btnKey = btn.dataset.mobileSpaces ? 'spaces' : (btn.dataset.cross || btn.dataset.tab);
    btn.classList.toggle('active', btnKey === key);
  });
}

function openSpaceDrawer() {
  document.body.classList.add('space-drawer-open');
  document.querySelectorAll('[data-mobile-spaces]').forEach(btn => {
    btn.classList.add('active');
    btn.setAttribute('aria-expanded', 'true');
  });
}

function closeSpaceDrawer() {
  document.body.classList.remove('space-drawer-open');
  document.querySelectorAll('[data-mobile-spaces]').forEach(btn => {
    btn.setAttribute('aria-expanded', 'false');
  });
}

function toggleSpaceDrawer() {
  if (document.body.classList.contains('space-drawer-open')) closeSpaceDrawer();
  else openSpaceDrawer();
}

document.querySelectorAll('[data-mobile-spaces]').forEach(btn => {
  btn.addEventListener('click', () => {
    setBottomNavActive('spaces');
    toggleSpaceDrawer();
  });
});

document.querySelectorAll('.bnav-btn[data-cross]').forEach(btn => {
  btn.addEventListener('click', () => showCrossView(btn.dataset.cross));
});

document.getElementById('space-drawer-backdrop')?.addEventListener('click', closeSpaceDrawer);
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeSpaceDrawer();
});

document.getElementById('settings-nav-btn')?.addEventListener('click', () => {
  activateSection('more');
  setBottomNavActive('more');
  closeSpaceDrawer();
  document.querySelectorAll('.settings-nav-btn').forEach(btn => btn.classList.add('active'));
});

// "More" page cards: jump to the corresponding tab / open the corresponding control.
document.querySelectorAll('[data-go-tab]').forEach(card => {
  card.addEventListener('click', () => {
    const target = document.querySelector(`.tab[data-tab="${card.dataset.goTab}"]`);
    if (target) target.click();
  });
});
// More-page Drive trigger is now wired directly in BackupManager.initUI() so the
// user gesture is preserved (synthetic .click() forwarding here was blocking the
// OAuth popup on mobile browsers).

// ── HELPERS ────────────────────────────────────────────
function getCurrentContainer() {
  if (activeSection === 'topics') {
    return (state.topics || []).find(t => t.id === state.currentTopicId);
  }
  return state.robots.find(r => r.id === state.currentRobotId);
}

// Collapse all expanded tasks in the currently-open list before navigating away.
// task.expanded is device-local UI state — write directly to localStorage, no push.
function collapseCurrentListTasks() {
  const robot = state.robots.find(r => r.id === state.currentRobotId);
  if (robot) robot.tasks.forEach(t => { t.expanded = false; });
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); } catch {}
}
function renderCurrentDetail() {
  if (activeSection === 'topics') renderTopicDetail();
  else renderRobotDetail();
}

// ── PROJECT LIST (grouped by category, filtered by mode) ─
function renderRobotList() {
  const list = document.getElementById('robot-list');
  if (!list) return;
  const projects = projectsByMode();
  if (!projects.length) {
    const emptyKey = 'empty.no_lists';
    list.innerHTML = `<div style="padding:16px;text-align:center;color:var(--muted);font-size:13px;">${t(emptyKey)}</div>`;
    refreshCategoryDatalist();
    return;
  }

  // Group projects by category
  const groups = {};
  projects.forEach(robot => {
    const cat = (robot.category || '').trim() || 'Uncategorized';
    if (!groups[cat]) groups[cat] = [];
    groups[cat].push(robot);
  });

  // Sort: alphabetical, "Uncategorized" last
  const cats = Object.keys(groups).sort((a, b) => {
    if (a === 'Uncategorized') return 1;
    if (b === 'Uncategorized') return -1;
    return a.localeCompare(b, 'tr');
  });

  state.collapsedCategories = state.collapsedCategories || {};

  list.innerHTML = cats.map(cat => {
    const collapsed = !!state.collapsedCategories[cat];
    const items = groups[cat];
    const itemsHtml = items.map(robot => {
      const active = robot.tasks.filter(t => t.status !== 'done').length;
      const isSelected = robot.id === state.currentRobotId;
      return `
        <div class="robot-item ${isSelected ? 'active' : ''}" data-id="${robot.id}">
          <div class="robot-avatar">${escapeHtml((robot.name || '?')[0].toUpperCase())}</div>
          <div class="robot-item-info">
            <div class="robot-item-name">${escapeHtml(robot.name)}</div>
            <div class="robot-item-count">${active === 0 ? t('count.tasks_zero') : (active === 1 ? t('count.tasks_one') : t('count.tasks_other', {n: active}))}</div>
          </div>
        </div>`;
    }).join('');
    return `
      <div class="cat-group ${collapsed ? 'collapsed' : ''}" data-cat="${escapeAttr(cat)}">
        <div class="cat-header">
          <span class="cat-chev">${ICO.chevron}</span>
          <span class="cat-name">${escapeHtml(cat)}</span>
          <span class="cat-count">${items.length}</span>
        </div>
        <div class="cat-items">${itemsHtml}</div>
      </div>`;
  }).join('');

  list.querySelectorAll('.cat-header').forEach(h => {
    h.addEventListener('click', () => {
      const cat = h.parentElement.dataset.cat;
      state.collapsedCategories[cat] = !state.collapsedCategories[cat];
      save();
      renderRobotList();
    });
  });

  list.querySelectorAll('.robot-item').forEach(item => {
    item.addEventListener('click', () => {
      if (item.dataset.id !== state.currentRobotId) collapseCurrentListTasks();
      state.currentRobotId = item.dataset.id;
      renderRobotList();
      renderRobotDetail();
    });
  });

  refreshCategoryDatalist();
}

// HTML attribute escape (for data-cat)
function escapeAttr(s) {
  return String(s).replace(/&/g,'&amp;').replace(/"/g,'&quot;').replace(/'/g,'&#39;').replace(/</g,'&lt;');
}

// Populate the modal's category datalist with existing categories (current mode only)
function refreshCategoryDatalist() {
  const dl = document.getElementById('categories-datalist');
  if (!dl) return;
  const cats = new Set();
  projectsByMode().forEach(r => { if (r.category && r.category.trim()) cats.add(r.category.trim()); });
  dl.innerHTML = Array.from(cats).sort((a,b)=>a.localeCompare(b,'tr')).map(c => `<option value="${escapeAttr(c)}"></option>`).join('');
}

// ── ROBOT DETAIL ───────────────────────────────────────
function renderRobotDetail() {
  const content = document.getElementById('robot-content');
  const robot = getCurrentContainer();
  const isDaily = getMode() === 'daily';
  const robotsSection = document.getElementById('robots');

  if (!robot) {
    if (robotsSection) robotsSection.removeAttribute('data-detail-open');
    const emptyMsg = t('empty.select_list').replace(/\n/g, '<br>');
    content.innerHTML = `
      <div class="empty-state">
        <div class="empty-icon">${ICO.botLg}</div>
        <p>${emptyMsg}</p>
      </div>`;
    document.body.classList.remove('is-readonly');
    if (typeof stopSpacePoll === 'function') stopSpacePoll();
    return;
  }
  if (robotsSection) robotsSection.setAttribute('data-detail-open', 'true');

  // Read-only enforcement: if this robot lives inside a shared Space where
  // the current user is a Viewer (reader), block edit affordances. Edits
  // would silently fail to sync (Drive 403s the PATCH); hiding them is
  // honest UX.
  const readOnly = isRobotReadOnly(robot.id);
  document.body.classList.toggle('is-readonly', readOnly);

  // Auto-sync: when a shared list opens, pull latest if stale and start
  // a periodic refresh so remote changes flow in without page reload.
  // Non-shared lists clear any previous poll.
  const __spaceOfRobot = findSpaceOfRobot(robot.id);
  if (__spaceOfRobot && __spaceOfRobot.shared && __spaceOfRobot.driveFileId) {
    if (typeof maybeAutoPull   === 'function') maybeAutoPull(__spaceOfRobot.id);
    if (typeof startSpacePoll  === 'function') startSpacePoll(__spaceOfRobot.id);
  } else {
    if (typeof stopSpacePoll === 'function') stopSpacePoll();
  }

  const activeTasks  = robot.tasks.filter(t => t.status === 'active');
  const pendingTasks = robot.tasks.filter(t => t.status === 'pending');
  const doneTasks    = robot.tasks.filter(t => t.status === 'done');
  const orderedTasks = [...activeTasks, ...pendingTasks, ...doneTasks];

  const issues = robot.issues || [];
  const openIssues = issues.filter(i => i.status !== 'resolved');

  if (isDaily && robotTab === 'issues') robotTab = 'tasks';

  const issuesTabBtn = isDaily ? '' : `
      <button class="inner-tab ${robotTab==='issues'?'active':''}" onclick="switchRobotTab('issues')">
        ${t('task.issues_label')} <span class="count-pill issues-pill">${openIssues.length}</span>
      </button>`;

  content.innerHTML = `
    <div class="robot-detail-header">
      <button class="robot-detail-back" onclick="clearRobotSelection()" aria-label="Back">
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>
      </button>
      <div>
        <div class="robot-detail-name">${escapeHtml(robot.name)}</div>
        ${robot.description ? `<div class="robot-detail-desc">${escapeHtml(robot.description)}</div>` : ''}
      </div>
      <div class="btn-group">
        <button class="btn-sm" onclick="saveListAsTemplate('${robot.id}')" title="Save list as template">Template</button>
        <button class="btn-sm" onclick="editRobot('${robot.id}')">${t('btn.edit')}</button>
        <button class="btn-sm danger" onclick="deleteRobot('${robot.id}')">${t('btn.delete_list')}</button>
      </div>
    </div>

    ${readOnly ? `
      <div class="readonly-banner" role="status">
        <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
        <span>View only — shared by ${escapeHtml(getRobotSpaceOwner(robot.id) || 'someone')}. Edits aren't saved.</span>
      </div>
    ` : ''}

    <div class="inner-tabs">
      <button class="inner-tab ${robotTab==='tasks'?'active':''}" onclick="switchRobotTab('tasks')">
        ${t('task.tasks_label')} <span class="count-pill">${activeTasks.length + pendingTasks.length}</span>
      </button>
      ${issuesTabBtn}
    </div>

    <div id="inner-tab-content">
      ${robotTab === 'tasks' ? renderTabTasks(orderedTasks, activeTasks, pendingTasks) : ''}
      ${robotTab === 'issues' && !isDaily ? renderTabIssues(issues) : ''}
    </div>
  `;
}

window.switchRobotTab = function(tab) {
  if (tab === 'issues' && getMode() === 'daily') tab = 'tasks';
  robotTab = tab;
  renderRobotDetail();
};

function renderTabTasks(ordered, activeTasks, pendingTasks) {
  const openCount = activeTasks.length + pendingTasks.length;
  return `
    <div class="dsection">
      <div class="dsection-header">
        <div class="dsection-label">${t('task.tasks_label')} <span class="count-pill">${t('count.open', { n: openCount })}</span></div>
        <button class="btn-add" onclick="openTaskModal()">+ ${t('btn.add_task')}</button>
      </div>
      <div id="task-list">
        ${ordered.length === 0
          ? `<div style="color:var(--muted);font-size:14px;padding:8px 0;">${t('empty.no_tasks_add')}</div>`
          : ordered.map(t => renderTask(t)).join('')}
      </div>
    </div>
  `;
}


// ── ISSUES ─────────────────────────────────────────────
function renderTabIssues(issues) {
  const open       = issues.filter(i => i.status === 'open');
  const invest     = issues.filter(i => i.status === 'investigating');
  const resolved   = issues.filter(i => i.status === 'resolved');
  const ordered    = [...open, ...invest, ...resolved];

  return `
    <div class="dsection">
      <div class="dsection-header">
        <div class="dsection-label">${t('task.issues_label')} <span class="count-pill issues-pill">${t('count.open', { n: open.length + invest.length })}</span></div>
        <button class="btn-add" onclick="openIssueModal()">+ ${t('btn.add_issue')}</button>
      </div>
      <div id="issue-list">
        ${ordered.length === 0
          ? `<div style="color:var(--muted);font-size:14px;padding:8px 0;">${t('empty.no_issues')}</div>`
          : ordered.map(i => renderIssue(i)).join('')}
      </div>
    </div>
  `;
}

function renderIssue(issue) {
  const severityLabel = { low:'Low', medium:'Medium', high:'High', critical:'Critical' };
  const statusLabel   = { open:'Open', investigating:'Investigating', resolved:'Resolved' };
  return `
    <div class="task-item ${issue.status} ${issue.expanded ? 'expanded' : ''}" id="issue-${issue.id}">
      <div class="task-header" onclick="toggleIssue('${issue.id}')">
        <div class="issue-dot ${issue.status}"></div>
        <div class="task-title-text">${escapeHtml(issue.title)}</div>
        <span class="severity-tag ${issue.severity}">${severityLabel[issue.severity]}</span>
        <span class="issue-status-tag ${issue.status}">${statusLabel[issue.status]}</span>
        ${(issue.notebook||[]).length > 0 ? `<span class="nb-count">${issue.notebook.length}</span>` : ''}
        <span class="expand-chevron">${ICO.chevron}</span>
      </div>
      <div class="task-body">
        <div class="task-body-inner">
          ${renderIssueNotebook(issue)}
          ${renderAttachments('issue', issue.id, issue.attachments)}
          <div class="task-actions">
            ${issue.status === 'open'          ? `<button class="btn-sm" onclick="setIssueStatus('${issue.id}','investigating')">${ICO.search}<span>Investigating</span></button>` : ''}
            ${issue.status === 'investigating' ? `<button class="btn-sm" onclick="setIssueStatus('${issue.id}','open')">${ICO.undo}<span>Reopen</span></button>` : ''}
            ${issue.status !== 'resolved'      ? `<button class="btn-sm success" onclick="setIssueStatus('${issue.id}','resolved')">${ICO.check}<span>Resolved</span></button>` : ''}
            ${issue.status === 'resolved'      ? `<button class="btn-sm" onclick="setIssueStatus('${issue.id}','open')">${ICO.undo}<span>Reopen</span></button>` : ''}
            <button class="btn-sm" onclick="editIssue('${issue.id}')">Edit</button>
            <button class="btn-sm danger" onclick="deleteIssue('${issue.id}')">Delete</button>
          </div>
        </div>
      </div>
    </div>
  `;
}

function renderIssueNotebook(issue) {
  const entries = issue.notebook || [];
  const entriesHtml = entries.length === 0
    ? `<div class="nb-empty">${t('empty.no_notes')}</div>`
    : entries.map(e => `
        <div class="nb-entry" id="nbentry-${e.id}">
          <div class="nb-entry-meta">
            <span class="nb-entry-time">${formatNoteTime(e.createdAt)}</span>
            <button class="nb-delete-btn" onclick="deleteIssueNoteEntry('${issue.id}','${e.id}')" aria-label="${t('aria.delete')}">${ICO.close}</button>
          </div>
          <div class="nb-entry-text">${renderMarkdown(e.text)}</div>
        </div>
      `).join('');
  return `
    <div class="notebook" id="issue-notebook-${issue.id}">
      <div class="nb-entries">${entriesHtml}</div>
      <div class="nb-input-row">
        <div class="nb-compose">
          ${noteToolbarHtml(`issue-nb-input-${issue.id}`)}
          <textarea class="nb-input" id="issue-nb-input-${issue.id}"
            placeholder="${t('ph.note_input')}"
            onkeydown="issueNbKeydown(event,'${issue.id}')"
            rows="4"
          ></textarea>
        </div>
        <button class="nb-add-btn" onclick="addIssueNoteEntry('${issue.id}')">${t('btn.add_short')}</button>
      </div>
    </div>
  `;
}

window.toggleIssue = function(id) {
  const robot = getCurrentContainer();
  const issue = (robot.issues||[]).find(i => i.id === id);
  issue.expanded = !issue.expanded;
  save();
  const el = document.getElementById('issue-' + id);
  el.classList.toggle('expanded', issue.expanded);
};

window.setIssueStatus = function(id, status) {
  const robot = getCurrentContainer();
  const issue = (robot.issues||[]).find(i => i.id === id);
  issue.status = status;
  save();
  renderCurrentDetail();
};

window.deleteIssue = async function(id) {
  if (!(await confirmDialog({ message: t('conf.delete_issue'), danger: true, okText: t('btn.delete') || 'Delete' }))) return;
  const robot = getCurrentContainer();
  robot.issues = (robot.issues||[]).filter(i => i.id !== id);
  save();
  renderCurrentDetail();
};

window.addIssueNoteEntry = function(issueId) {
  const robot = getCurrentContainer();
  const issue = (robot.issues||[]).find(i => i.id === issueId);
  const input = document.getElementById('issue-nb-input-' + issueId);
  const text = input.value.trim();
  if (!text) { input.focus(); return; }
  if (!issue.notebook) issue.notebook = [];
  issue.notebook.push({ id: uid(), text, createdAt: Date.now() });
  save();
  const nb = document.getElementById('issue-notebook-' + issueId);
  if (nb) nb.outerHTML = renderIssueNotebook(issue);
  const countEl = document.querySelector(`#issue-${issueId} .nb-count`);
  const chevron = document.querySelector(`#issue-${issueId} .expand-chevron`);
  if (issue.notebook.length > 0) {
    if (countEl) countEl.textContent = issue.notebook.length;
    else if (chevron) {
      const badge = document.createElement('span');
      badge.className = 'nb-count';
      badge.textContent = issue.notebook.length;
      chevron.before(badge);
    }
  }
};

window.issueNbKeydown = function(e, issueId) {
  if (e.key === 'Enter' && e.ctrlKey) { e.preventDefault(); addIssueNoteEntry(issueId); }
};

window.deleteIssueNoteEntry = function(issueId, entryId) {
  const robot = getCurrentContainer();
  const issue = (robot.issues||[]).find(i => i.id === issueId);
  issue.notebook = (issue.notebook||[]).filter(e => e.id !== entryId);
  save();
  const nb = document.getElementById('issue-notebook-' + issueId);
  if (nb) nb.outerHTML = renderIssueNotebook(issue);
  const countEl = document.querySelector(`#issue-${issueId} .nb-count`);
  if (countEl) {
    if (issue.notebook.length === 0) countEl.remove();
    else countEl.textContent = issue.notebook.length;
  }
};

function formatNoteTime(ts) {
  const d = new Date(ts);
  const pad = n => String(n).padStart(2, '0');
  return `${d.getDate()} ${['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'][d.getMonth()]} ${d.getFullYear()} · ${pad(d.getHours())}:${pad(d.getMinutes())}`;
}

function renderNotebook(task) {
  const entries = task.notebook || [];
  const entriesHtml = entries.length === 0
    ? `<div class="nb-empty">${t('empty.no_notes')}</div>`
    : entries.map(e => e.editing ? `
        <div class="nb-entry nb-editing" id="nbentry-${e.id}">
          <div class="nb-entry-meta">
            <span class="nb-entry-time">${formatNoteTime(e.createdAt)}</span>
            <span class="nb-entry-actions">
              <button class="nb-save-btn" onclick="saveEditedNoteEntry('${task.id}','${e.id}')">${t('btn.save')}</button>
              <button class="nb-cancel-btn" onclick="cancelEditNoteEntry('${task.id}','${e.id}')">${t('btn.cancel')}</button>
            </span>
          </div>
          <textarea class="nb-edit-input" id="nb-edit-input-${task.id}-${e.id}"
            onkeydown="editNbKeydown(event,'${task.id}','${e.id}')"
            rows="4">${escapeHtml(e.text)}</textarea>
          ${noteToolbarHtml(`nb-edit-input-${task.id}-${e.id}`)}
        </div>
      ` : `
        <div class="nb-entry" id="nbentry-${e.id}">
          <div class="nb-entry-meta">
            <span class="nb-entry-time">${formatNoteTime(e.createdAt)}</span>
            <span class="nb-entry-actions">
              <button class="nb-edit-btn" onclick="editNoteEntry('${task.id}','${e.id}')">${t('btn.edit')}</button>
              <button class="nb-delete-btn" onclick="deleteNoteEntry('${task.id}','${e.id}')" aria-label="${t('aria.delete')}">${ICO.close}</button>
            </span>
          </div>
          <div class="nb-entry-text">${renderMarkdown(e.text)}</div>
        </div>
      `).join('');

  return `
    <div class="notebook" id="notebook-${task.id}">
      <div class="nb-entries">${entriesHtml}</div>
      <div class="nb-input-row">
        <div class="nb-compose">
          ${noteToolbarHtml(`nb-input-${task.id}`)}
          <textarea class="nb-input" id="nb-input-${task.id}"
            placeholder="${t('ph.note_input')}"
            onkeydown="nbKeydown(event,'${task.id}')"
            rows="4"
          ></textarea>
        </div>
        <button class="nb-add-btn" onclick="addNoteEntry('${task.id}')">${t('btn.add_short')}</button>
      </div>
    </div>
  `;
}

function isToday(iso) {
  if (!iso) return false;
  const d = new Date(iso + 'T00:00:00');
  const t = new Date(); t.setHours(0,0,0,0);
  return d.getTime() === t.getTime();
}
window.snoozeTask = function(taskId, days) {
  const robot = getCurrentContainer();
  const task = robot && robot.tasks.find(t => t.id === taskId);
  if (!task) return;
  // Anchor on existing due date if it's in the future, otherwise on today —
  // so a "+1d" on an overdue task moves it to tomorrow, not still-overdue.
  const today = new Date(); today.setHours(0,0,0,0);
  let base = today;
  if (task.dueDate) {
    const d = new Date(task.dueDate + 'T00:00:00');
    if (d > today) base = d;
  }
  const next = new Date(base.getTime() + days * 86400000);
  task.dueDate = next.toISOString().slice(0, 10);
  if (task.status === 'pending') task.status = 'active';
  stampTask(task);
  save();
  renderCurrentDetail();
};

window.assignToday = function(taskId) {
  const robot = getCurrentContainer();
  const task = robot && robot.tasks.find(t => t.id === taskId);
  if (!task) return;
  if (isToday(task.dueDate)) {
    task.dueDate = null;        // toggle off
  } else {
    task.dueDate = new Date().toISOString().slice(0, 10);
    if (task.status === 'pending') task.status = 'active';
  }
  stampTask(task);
  save();
  renderCurrentDetail();
};
function dueClass(iso, status) {
  if (!iso || status === 'done') return '';
  const today = new Date(); today.setHours(0,0,0,0);
  const d = new Date(iso + 'T00:00:00');
  if (d < today) return 'overdue';
  if (d.getTime() === today.getTime()) return 'today';
  return '';
}
// Look up the freshest name/picture for an email across all spaces.
// Falls back gracefully when there is no match.
function findMemberByEmail(email) {
  if (!email) return null;
  const k = email.toLowerCase();
  for (const sp of (state.spaces || [])) {
    for (const m of (sp.members || [])) {
      if (m && m.email && m.email.toLowerCase() === k) return m;
    }
    for (const c of (sp.collaborators || [])) {
      if (c && c.email && c.email.toLowerCase() === k) return c;
    }
  }
  // Also check the current signed-in user
  const me = (typeof DriveAPI !== 'undefined' && DriveAPI.getUserInfo && DriveAPI.getUserInfo()) || null;
  if (me && me.email && me.email.toLowerCase() === k) return me;
  return null;
}

// Small avatar / initial chip used on assigned tasks.
// Always uses the freshest picture/name from space.members so chips
// are consistent regardless of when the task was assigned.
function renderAssigneeChip(a) {
  if (!a || !a.email) return '';
  // Get fresh member data — picture or name may have updated since assignment
  const fresh = findMemberByEmail(a.email);
  const picture = (fresh && fresh.picture) || a.picture || null;
  const name    = (fresh && fresh.name)    || a.name    || a.email;
  const me = (typeof DriveAPI !== 'undefined' && DriveAPI.getUserInfo && DriveAPI.getUserInfo()) || null;
  const isMe = me && me.email && a.email.toLowerCase() === me.email.toLowerCase();
  const initial = (name[0] || '?').toUpperCase();
  const tooltip = `${name}${isMe ? ' (you)' : ''}`;
  const inner = picture
    ? `<img src="${escapeAttr(picture)}" alt="" referrerpolicy="no-referrer">`
    : `<span class="assignee-initial">${escapeHtml(initial)}</span>`;
  return `<span class="task-assignee-chip ${isMe ? 'is-me' : ''}" title="${escapeAttr(tooltip)}">${inner}</span>`;
}

function formatDueShort(iso) {
  if (!iso) return '';
  const d = new Date(iso + 'T00:00:00');
  const today = new Date(); today.setHours(0,0,0,0);
  const diff = Math.round((d - today) / 86400000);
  if (diff === 0) return t('due.today');
  if (diff === 1) return t('due.tomorrow');
  if (diff === -1) return t('due.yesterday');
  if (diff > 1 && diff < 7) return t('due.days_from_now', { n: diff });
  if (diff < 0)  return t('due.days_ago', { n: -diff });
  const months = t('months.short').split(',');
  return `${d.getDate()} ${months[d.getMonth()]}`;
}

function renderTask(task) {
  const subs = task.subtasks || [];
  const subDone = subs.filter(s => s.done).length;
  return `
    <div class="task-item ${task.status} ${task.expanded ? 'expanded' : ''}" id="task-${task.id}">
      <div class="task-header" onclick="toggleTask('${task.id}')">
        <div class="task-dot ${task.status}"></div>
        <div class="task-title-text">
          ${task.recurrence && task.recurrence.type ? `<span class="task-recurring-ico" title="Repeats ${escapeAttr(task.recurrence.type)}"><svg viewBox="0 0 24 24" width="11" height="11" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/></svg></span>` : ''}
          ${escapeHtml(task.title)}
        </div>
        <div class="task-tags">
          ${getTaskAssignees(task).map(a => renderAssigneeChip(a)).join('')}
          ${(task.tags || []).map(tg => `<span class="task-label-chip" data-tag="${escapeAttr(tg)}">${escapeHtml(tg)}</span>`).join('')}
          ${task.dueDate ? `<span class="task-due ${dueClass(task.dueDate, task.status)}">${formatDueShort(task.dueDate)}</span>` : ''}
          ${task.priority !== 'normal' ? `<span class="priority-tag ${task.priority}">${task.priority}</span>` : ''}
          <span class="status-tag ${task.status}">${task.status}</span>
        </div>
        <span class="expand-chevron">${ICO.chevron}</span>
      </div>
      <div class="task-body">
        <div class="task-body-inner">
          <div class="task-actions-row">
            ${task.status !== 'done'    ? `<button class="btn-sm success" onclick="event.stopPropagation();setStatus('${task.id}','done')">${ICO.check}<span>Done</span></button>` : ''}
            ${task.status === 'done'    ? `<button class="btn-sm" onclick="event.stopPropagation();setStatus('${task.id}','active')">${ICO.undo}<span>Reopen</span></button>` : ''}
            ${task.status !== 'done'    ? `<button class="btn-sm ${isToday(task.dueDate) ? 'active-toggle' : ''}" onclick="event.stopPropagation();assignToday('${task.id}')" title="${isToday(task.dueDate) ? t('btn.remove_today_title') : t('btn.start_today_title')}">${isToday(task.dueDate) ? t('btn.today_star') : t('btn.add_to_today')}</button>` : ''}
            ${task.status !== 'done'    ? `<button class="btn-sm" onclick="event.stopPropagation();snoozeTask('${task.id}',1)" title="Push to tomorrow">+1d</button>` : ''}
            ${task.status !== 'done'    ? `<button class="btn-sm" onclick="event.stopPropagation();snoozeTask('${task.id}',7)" title="Push by a week">+1w</button>` : ''}
            <button class="btn-sm goal-toggle${isTaskWeeklyGoal(task.id) ? ' active-toggle' : ''}" onclick="event.stopPropagation();toggleTaskWeeklyGoal('${task.id}')" title="${t('btn.weekly_goal') || 'Haftalık hedef'}"><svg viewBox="0 0 24 24" width="11" height="11" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg><span>${t('btn.weekly_goal') || 'Hedef'}</span></button>
            ${task.status === 'active'  ? `<button class="btn-sm" onclick="event.stopPropagation();setStatus('${task.id}','pending')">${ICO.pause}<span>Pending</span></button>` : ''}
            ${task.status === 'pending' ? `<button class="btn-sm" onclick="event.stopPropagation();setStatus('${task.id}','active')">${ICO.play}<span>Activate</span></button>` : ''}
            <button class="btn-sm" onclick="event.stopPropagation();editTask('${task.id}')">Edit</button>
            <button class="btn-sm danger" onclick="event.stopPropagation();deleteTask('${task.id}')">Delete</button>
          </div>
          ${renderSubtasks(task)}
          ${renderNotebook(task)}
          ${renderAttachments('task', task.id, task.attachments)}
          ${renderTaskPhotos(task)}
        </div>
      </div>
    </div>
  `;
}

// ── SUBTASKS ────────────────────────────────────────────
function renderSubtasks(task) {
  const subs = task.subtasks || [];
  setTimeout(autoSizeSubtaskNotes, 0);
  const items = subs.map(s => `
    <div class="subtask ${s.done ? 'done' : ''}" data-sub-id="${s.id}">
      <div class="subtask-main">
        <button class="subtask-check ${s.done ? 'checked' : ''}" onclick="toggleSubtask('${task.id}','${s.id}')" aria-label="Toggle">
          ${s.done ? ICO.checkSm : ''}
        </button>
        <span class="subtask-text">${escapeHtml(s.title)}</span>
        <button class="subtask-del" onclick="deleteSubtask('${task.id}','${s.id}')" aria-label="Delete">${ICO.close}</button>
      </div>
      <textarea class="subtask-note" rows="2" placeholder="Add note" onfocus="autoSizeSubtaskNote(this)" oninput="updateSubtaskNote('${task.id}','${s.id}',this.value);autoSizeSubtaskNote(this)">${escapeHtml(s.note || '')}</textarea>
    </div>
  `).join('');
  return `
    <div class="sub-section">
      <div class="sub-section-head">
        <span class="sub-label">Subtasks${subs.length ? ` <span class="count-pill">${subs.filter(s=>s.done).length}/${subs.length}</span>` : ''}</span>
      </div>
      ${items ? `<div class="sub-list">${items}</div>` : ''}
      <div class="sub-add-row">
        <input type="text" class="sub-add-input" id="sub-add-${task.id}"
          placeholder="Add a subtask"
          enterkeyhint="done"
          onkeydown="if(event.key==='Enter'){event.preventDefault();addSubtask('${task.id}')}" />
        <button type="button" class="sub-add-btn" onclick="addSubtask('${task.id}')" aria-label="Add subtask">+</button>
      </div>
    </div>
  `;
}

window.addSubtask = function(taskId) {
  const robot = getCurrentContainer();
  const task = robot && robot.tasks.find(t => t.id === taskId);
  if (!task) return;
  const input = document.getElementById('sub-add-' + taskId);
  const title = input ? input.value.trim() : '';
  if (!title) { input?.focus(); return; }
  if (!task.subtasks) task.subtasks = [];
  task.subtasks.push({ id: uid(), title, note: '', done: false, createdAt: Date.now() });
  stampTask(task);
  save();
  renderCurrentDetail();
};

window.toggleSubtask = function(taskId, subId) {
  const robot = getCurrentContainer();
  const task = robot && robot.tasks.find(t => t.id === taskId);
  const sub = task && (task.subtasks || []).find(s => s.id === subId);
  if (!sub) return;
  sub.done = !sub.done;
  stampTask(task);
  save();
  renderCurrentDetail();
};

function autoTextareaMaxHeight(el) {
  if (!el) return 220;
  if (el.classList.contains('subtask-note')) return 132;
  if (el.classList.contains('reviews-textarea')) return 420;
  if (el.classList.contains('brainstorm-area') || el.classList.contains('notes-area')) return 320;
  if (el.classList.contains('nb-input') || el.classList.contains('nb-edit-input')) return 260;
  if (el.classList.contains('cal-notes') || el.classList.contains('cal-event-notes')) return 240;
  if (el.closest('.modal')) return 260;
  return 220;
}

function shouldAutoSizeTextarea(el) {
  return el && el.tagName === 'TEXTAREA' && !el.classList.contains('quick-notes-area');
}

window.autoSizeTextarea = function(el) {
  if (!shouldAutoSizeTextarea(el)) {
    if (el && el.classList && el.classList.contains('quick-notes-area')) {
      el.classList.remove('auto-grow-textarea');
      el.style.height = '';
      el.style.maxHeight = '';
      el.style.overflowY = '';
    }
    return;
  }
  const max = autoTextareaMaxHeight(el);
  el.classList.add('auto-grow-textarea');
  el.style.maxHeight = max + 'px';
  el.style.height = 'auto';
  const next = Math.min(el.scrollHeight, max);
  el.style.height = next + 'px';
  el.style.overflowY = el.scrollHeight > max ? 'auto' : 'hidden';
};

function autoSizeTextareas(root) {
  (root || document).querySelectorAll('textarea').forEach(el => {
    if (shouldAutoSizeTextarea(el)) window.autoSizeTextarea(el);
  });
}

function initAutoGrowingTextareas() {
  if (document.documentElement.dataset.autoTextareas === '1') {
    autoSizeTextareas(document);
    return;
  }
  document.documentElement.dataset.autoTextareas = '1';
  autoSizeTextareas(document);
  document.addEventListener('input', e => {
    if (e.target && e.target.tagName === 'TEXTAREA') window.autoSizeTextarea(e.target);
  }, true);
  document.addEventListener('focusin', e => {
    if (e.target && e.target.tagName === 'TEXTAREA') window.autoSizeTextarea(e.target);
  }, true);
  if (typeof MutationObserver !== 'undefined') {
    const mo = new MutationObserver(records => {
      records.forEach(record => {
        record.addedNodes.forEach(node => {
          if (!node || node.nodeType !== 1) return;
          if (node.tagName === 'TEXTAREA') window.autoSizeTextarea(node);
          else if (node.querySelectorAll) autoSizeTextareas(node);
        });
      });
    });
    mo.observe(document.body, { childList: true, subtree: true });
  }
}

window.autoSizeSubtaskNote = function(el) {
  if (!el) return;
  window.autoSizeTextarea(el);
};

function autoSizeSubtaskNotes() {
  document.querySelectorAll('.subtask-note').forEach(el => window.autoSizeSubtaskNote(el));
}

window.updateSubtaskNote = function(taskId, subId, value) {
  const robot = getCurrentContainer();
  const task = robot && robot.tasks.find(t => t.id === taskId);
  const sub = task && (task.subtasks || []).find(s => s.id === subId);
  if (!sub) return;
  sub.note = value || '';
  stampTask(task);
  save();
};

window.deleteSubtask = function(taskId, subId) {
  const robot = getCurrentContainer();
  const task = robot && robot.tasks.find(t => t.id === taskId);
  if (!task) return;
  task.subtasks = (task.subtasks || []).filter(s => s.id !== subId);
  stampTask(task);
  save();
  renderCurrentDetail();
};

// Task expand/collapse
window.toggleTask = function(id) {
  const robot = getCurrentContainer();
  const task = robot.tasks.find(t => t.id === id);
  task.expanded = !task.expanded;
  // task.expanded is UI state — don't fire the full save() chain (which
  // would schedule a Drive push, sync the expand to every collaborator,
  // and trigger a Drive backup). Write straight to localStorage so the
  // expand persists across reloads on this device only.
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); } catch {}
  const el = document.getElementById('task-' + id);
  el.classList.toggle('expanded', task.expanded);
};

window.addNoteEntry = function(taskId) {
  const robot = getCurrentContainer();
  const task = robot.tasks.find(t => t.id === taskId);
  const input = document.getElementById('nb-input-' + taskId);
  const text = input.value.trim();
  if (!text) { input.focus(); return; }
  if (!task.notebook) task.notebook = [];
  task.notebook.push({ id: uid(), text, createdAt: Date.now() });
  stampTask(task);
  save();
  // Re-render only the notebook part for speed
  const nb = document.getElementById('notebook-' + taskId);
  if (nb) nb.outerHTML = renderNotebook(task);
  else renderCurrentDetail();
  // Re-render the note count badge in the header
  const countEl = document.querySelector(`#task-${taskId} .nb-count`);
  const expandChevron = document.querySelector(`#task-${taskId} .expand-chevron`);
  if (task.notebook.length > 0) {
    if (countEl) { countEl.textContent = task.notebook.length; }
    else if (expandChevron) {
      const badge = document.createElement('span');
      badge.className = 'nb-count';
      badge.textContent = task.notebook.length;
      expandChevron.before(badge);
    }
  }
};

window.nbKeydown = function(e, taskId) {
  if (e.key === 'Enter' && e.ctrlKey) { e.preventDefault(); addNoteEntry(taskId); }
};

window.editNbKeydown = function(e, taskId, entryId) {
  if (e.key === 'Enter' && e.ctrlKey) {
    e.preventDefault(); saveEditedNoteEntry(taskId, entryId);
  }
};

window.editNoteEntry = function(taskId, entryId) {
  const robot = getCurrentContainer();
  const task = robot && robot.tasks.find(t => t.id === taskId);
  if (!task) return;
  const entry = (task.notebook || []).find(e => e.id === entryId);
  if (!entry) return;
  entry.editing = true;
  const nb = document.getElementById('notebook-' + taskId);
  if (nb) nb.outerHTML = renderNotebook(task);
};

window.cancelEditNoteEntry = function(taskId, entryId) {
  const robot = getCurrentContainer();
  const task = robot && robot.tasks.find(t => t.id === taskId);
  if (!task) return;
  const entry = (task.notebook || []).find(e => e.id === entryId);
  if (!entry) return;
  delete entry.editing;
  const nb = document.getElementById('notebook-' + taskId);
  if (nb) nb.outerHTML = renderNotebook(task);
};

window.saveEditedNoteEntry = function(taskId, entryId) {
  const robot = getCurrentContainer();
  const task = robot && robot.tasks.find(t => t.id === taskId);
  if (!task) return;
  const entry = (task.notebook || []).find(e => e.id === entryId);
  if (!entry) return;
  const input = document.getElementById(`nb-edit-input-${taskId}-${entryId}`);
  if (!input) return;
  const text = input.value.trim();
  if (!text) { input.focus(); return; }
  entry.text = text;
  delete entry.editing;
  save();
  const nb = document.getElementById('notebook-' + taskId);
  if (nb) nb.outerHTML = renderNotebook(task);
};

window.deleteNoteEntry = function(taskId, entryId) {
  const robot = getCurrentContainer();
  const task = robot.tasks.find(t => t.id === taskId);
  task.notebook = (task.notebook || []).filter(e => e.id !== entryId);
  save();
  const nb = document.getElementById('notebook-' + taskId);
  if (nb) nb.outerHTML = renderNotebook(task);
  // update count badge
  const countEl = document.querySelector(`#task-${taskId} .nb-count`);
  if (countEl) {
    if (task.notebook.length === 0) countEl.remove();
    else countEl.textContent = task.notebook.length;
  }
};

// Core status-change logic — works with any robot/task pair.
// Used by setStatus (current container) and toggleTaskDone (cross-context).
function _applyTaskStatus(robot, task, status) {
  const wasNotDone = task.status !== 'done';
  task.status = status;
  if (status === 'done') task.completedAt = Date.now();
  else delete task.completedAt;
  stampTask(task);
  if (wasNotDone && status === 'done' && task.recurrence && task.recurrence.type) {
    spawnNextRecurrenceFromTask(robot, task);
  }
}

window.setStatus = function(id, status) {
  const robot = getCurrentContainer();
  const task = robot.tasks.find(t => t.id === id);
  _applyTaskStatus(robot, task, status);
  save();
  renderCurrentDetail();
  if (activeSection === 'topics') renderTopicList(); else renderRobotList();
};

// Toggle done/active for a task by id, usable from any section (e.g. Reviews goals).
window.toggleTaskDone = function(taskId) {
  let found = null;
  for (const r of (state.robots || [])) {
    const t = (r.tasks || []).find(t => t.id === taskId);
    if (t) { found = { robot: r, task: t }; break; }
  }
  if (!found) return;
  const newStatus = found.task.status === 'done' ? 'active' : 'done';
  _applyTaskStatus(found.robot, found.task, newStatus);
  save();
  renderCurrentDetail();
  if (typeof renderReviews === 'function') renderReviews();
};

// Compute the next due date for a recurring task.
function nextRecurrenceDate(fromIso, type) {
  // Base: existing dueDate if set, otherwise today.
  let base;
  if (fromIso) base = new Date(fromIso + 'T00:00:00');
  else { base = new Date(); base.setHours(0, 0, 0, 0); }
  if (isNaN(base.getTime())) { base = new Date(); base.setHours(0, 0, 0, 0); }
  switch (type) {
    case 'daily':    base.setDate(base.getDate() + 1); break;
    case 'weekly':   base.setDate(base.getDate() + 7); break;
    case 'biweekly': base.setDate(base.getDate() + 14); break;
    case 'monthly':  base.setMonth(base.getMonth() + 1); break;
    default: return null;
  }
  return ymd(base);
}

function spawnNextRecurrenceFromTask(robot, doneTask) {
  const next = nextRecurrenceDate(doneTask.dueDate, doneTask.recurrence && doneTask.recurrence.type);
  if (!next) return;
  // Avoid duplicate spawn: if a sibling task with the same recurrence and
  // dueDate already exists (e.g. user toggled done twice), bail.
  const dup = (robot.tasks || []).some(t =>
    t.title === doneTask.title &&
    t.dueDate === next &&
    t.recurrence && t.recurrence.type === doneTask.recurrence.type
  );
  if (dup) return;
  robot.tasks.push({
    id: uid(),
    title: doneTask.title,
    priority: doneTask.priority || 'normal',
    status: 'active',
    dueDate: next,
    tags: Array.isArray(doneTask.tags) ? [...doneTask.tags] : [],
    recurrence: { ...doneTask.recurrence },
    subtasks: (doneTask.subtasks || []).map(s => ({
      id: uid(),
      title: s.title || '',
      note: s.note || '',
      done: false,
      createdAt: Date.now(),
    })),
    notebook: [],
    expanded: false,
    createdAt: Date.now(),
  });
}

window.deleteTask = async function(id) {
  if (!(await confirmDialog({ message: t('conf.delete_task'), danger: true, okText: t('btn.delete') || 'Delete' }))) return;
  const robot = getCurrentContainer();
  robot.tasks = robot.tasks.filter(t => t.id !== id);
  // Tombstone: record that this task was intentionally deleted so that
  // collaborators who still have it locally don't resurrect it on next merge.
  if (!Array.isArray(robot.deletedTaskIds)) robot.deletedTaskIds = [];
  if (!robot.deletedTaskIds.includes(id)) robot.deletedTaskIds.push(id);
  save();
  renderCurrentDetail();
  if (activeSection === 'topics') renderTopicList(); else renderRobotList();
};

window.deleteRobot = async function(id) {
  if (!(await confirmDialog({ message: t('conf.delete_list'), danger: true, okText: t('btn.delete') || 'Delete' }))) return;
  state.robots = state.robots.filter(r => r.id !== id);
  if (state.currentRobotId === id) state.currentRobotId = null;
  save();
  renderRobotList();
  renderRobotDetail();
};

// The Robots section has no in-page list (Spaces drawer drives nav), so
// the detail back button just returns the user to Home where they came from.
window.clearRobotSelection = function() {
  state.currentRobotId = null;
  save();
  activateSection('home');
  setBnavActiveFor('home');
  if (typeof renderHome === 'function') renderHome();
};

window.deleteTopic = async function(id) {
  if (!(await confirmDialog({ message: t('conf.delete_list'), danger: true, okText: t('btn.delete') || 'Delete' }))) return;
  state.topics = (state.topics||[]).filter(t => t.id !== id);
  if (state.currentTopicId === id) state.currentTopicId = null;
  save();
  renderTopicList();
  renderTopicDetail();
};

window.editTopic = function(id) {
  const topic = (state.topics||[]).find(t => t.id === id);
  if (!topic) return;
  addingEntityType = 'topic';
  editingRobotId = id;
  document.getElementById('robot-name').value = topic.name;
  document.getElementById('robot-desc').value = topic.description || '';
  document.querySelector('#modal-robot h3').textContent = t('modal.edit_list');
  document.getElementById('save-robot').textContent = t('btn.save_changes');
  document.getElementById('robot-name-label').textContent = t('label.list_name');
  openModal('modal-robot');
  setTimeout(() => document.getElementById('robot-name').focus(), 50);
};

window.switchTopicTab = function(tab) {
  topicTab = tab;
  renderTopicDetail();
};

// ── TOPIC LIST ─────────────────────────────────────────
function renderTopicList() {
  const list = document.getElementById('topic-list');
  if (!list) return;
  const topics = state.topics || [];
  if (!topics.length) {
    list.innerHTML = `<div style="padding:16px;text-align:center;color:var(--muted);font-size:13px;">No areas yet</div>`;
    return;
  }
  list.innerHTML = topics.map(topic => {
    const active = topic.tasks.filter(t => t.status !== 'done').length;
    const isSelected = topic.id === state.currentTopicId;
    return `
      <div class="robot-item ${isSelected ? 'active' : ''}" data-id="${topic.id}">
        <div class="robot-avatar" style="background:var(--surface-3)">${escapeHtml((topic.name || '?')[0].toUpperCase())}</div>
        <div class="robot-item-info">
          <div class="robot-item-name">${escapeHtml(topic.name)}</div>
          <div class="robot-item-count">${active === 0 ? t('count.tasks_zero') : (active === 1 ? t('count.tasks_one') : t('count.tasks_other', {n: active}))}</div>
        </div>
      </div>
    `;
  }).join('');
  list.querySelectorAll('.robot-item').forEach(item => {
    item.addEventListener('click', () => {
      state.currentTopicId = item.dataset.id;
      renderTopicList();
      renderTopicDetail();
    });
  });
}

// ── TOPIC DETAIL ───────────────────────────────────────
function renderTopicDetail() {
  const content = document.getElementById('topic-content');
  if (!content) return;
  const topic = (state.topics||[]).find(t => t.id === state.currentTopicId);
  if (!topic) {
    content.innerHTML = `
      <div class="empty-state">
        <div class="empty-icon">${ICO.clipboard}</div>
        <p>Select an area or add a new one.</p>
      </div>`;
    return;
  }
  const activeTasks  = topic.tasks.filter(t => t.status === 'active');
  const pendingTasks = topic.tasks.filter(t => t.status === 'pending');
  const doneTasks    = topic.tasks.filter(t => t.status === 'done');
  const orderedTasks = [...activeTasks, ...pendingTasks, ...doneTasks];
  const issues = topic.issues || [];
  const openIssues = issues.filter(i => i.status !== 'resolved');

  content.innerHTML = `
    <div class="robot-detail-header">
      <div>
        <div class="robot-detail-name">${escapeHtml(topic.name)}</div>
        ${topic.description ? `<div class="robot-detail-desc">${escapeHtml(topic.description)}</div>` : ''}
      </div>
      <div class="btn-group">
        <button class="btn-sm" onclick="editTopic('${topic.id}')">Edit</button>
        <button class="btn-sm danger" onclick="deleteTopic('${topic.id}')">Delete</button>
      </div>
    </div>
    <div class="inner-tabs">
      <button class="inner-tab ${topicTab==='tasks'?'active':''}" onclick="switchTopicTab('tasks')">
        Tasks <span class="count-pill">${activeTasks.length + pendingTasks.length}</span>
      </button>
      <button class="inner-tab ${topicTab==='issues'?'active':''}" onclick="switchTopicTab('issues')">
        Known Issues <span class="count-pill issues-pill">${openIssues.length}</span>
      </button>
    </div>
    <div id="inner-tab-content">
      ${topicTab === 'tasks'  ? renderTabTasks(orderedTasks, activeTasks, pendingTasks) : ''}
      ${topicTab === 'issues' ? renderTabIssues(issues) : ''}
    </div>
  `;
}

// ── EDIT FUNCTIONS ─────────────────────────────────────
window.editRobot = function(id) {
  const robot = state.robots.find(r => r.id === id);
  if (!robot) return;
  addingEntityType = 'robot';
  editingRobotId = id;
  document.getElementById('robot-name').value = robot.name;
  document.getElementById('robot-desc').value = robot.description || '';
  const catEl = document.getElementById('robot-category');
  if (catEl) catEl.value = robot.category || '';
  document.querySelector('#modal-robot h3').textContent     = t('modal.edit_list');
  document.getElementById('save-robot').textContent          = t('btn.save_changes');
  document.getElementById('robot-name-label').textContent    = t('label.list_name');
  refreshCategoryDatalist();
  // Pre-select the Space that currently holds this list
  if (typeof refreshSpaceSelect === 'function') {
    const sp = (typeof findSpaceOfRobot === 'function') ? findSpaceOfRobot(id) : null;
    refreshSpaceSelect(sp ? sp.id : (state.spaces && state.spaces[0] && state.spaces[0].id));
  }
  openModal('modal-robot');
  setTimeout(() => document.getElementById('robot-name').focus(), 50);
};

window.editTask = function(id) {
  const robot = getCurrentContainer();
  const task = robot && robot.tasks.find(t => t.id === id);
  if (!task) return;
  editingTaskId = id;
  document.getElementById('task-title').value = task.title;
  resetRadio('task-priority-group', task.priority || 'normal');
  resetRadio('task-status-group', task.status || 'active');
  initRadioGroup('task-priority-group');
  initRadioGroup('task-status-group');
  const dd = document.getElementById('task-due-date');
  if (dd) dd.value = task.dueDate || '';
  const ti = document.getElementById('task-tags-input');
  if (ti) ti.value = (task.tags || []).join(', ');
  const rc = document.getElementById('task-recurrence');
  if (rc) rc.value = (task.recurrence && task.recurrence.type) || 'none';
  refreshAssigneeSelect(getTaskAssignees(task).map(a => a.email).filter(Boolean));
  renderTagPicker(task.tags || []);
  document.querySelector('#modal-task h3').textContent = t('modal.edit_task');
  document.getElementById('save-task').textContent = t('btn.save_changes');
  openModal('modal-task');
  setTimeout(() => document.getElementById('task-title').focus(), 50);
};

window.editIssue = function(id) {
  const robot = getCurrentContainer();
  const issue = robot && (robot.issues||[]).find(i => i.id === id);
  if (!issue) return;
  editingIssueId = id;
  document.getElementById('issue-title').value = issue.title;
  resetRadio('issue-severity-group', issue.severity || 'low');
  resetRadio('issue-status-group', issue.status === 'resolved' ? 'open' : (issue.status || 'open'));
  initRadioGroup('issue-severity-group');
  initRadioGroup('issue-status-group');
  document.querySelector('#modal-issue h3').textContent = t('modal.edit_issue');
  document.getElementById('save-issue').textContent = t('btn.save_changes');
  openModal('modal-issue');
  setTimeout(() => document.getElementById('issue-title').focus(), 50);
};

window.editVisit = function(id) {
  const visit = state.fieldVisits.find(v => v.id === id);
  if (!visit) return;
  editingVisitId = id;
  document.getElementById('visit-location').value = visit.location;
  document.getElementById('visit-date').value = visit.date;
  document.getElementById('visit-robot').value = visit.robot || '';
  document.getElementById('visit-notes').value = visit.notes || '';
  document.querySelector('#modal-visit h3').textContent = t('modal.edit_visit');
  document.getElementById('save-visit').textContent = t('btn.save_changes');
  openModal('modal-visit');
  setTimeout(() => document.getElementById('visit-location').focus(), 50);
};

// ── MODAL HELPERS ──────────────────────────────────────

// Themed in-app replacement for window.prompt(). Async — returns the
// trimmed string the user typed, or null if they cancelled.
//
//   await promptInput({
//     title:       'Rename Space',
//     label:       'New name:',
//     value:       'Work',
//     placeholder: 'Engineering',
//     okText:      'Rename',
//   });
function promptInput(opts) {
  opts = opts || {};
  return new Promise(resolve => {
    const modal   = document.getElementById('modal-input');
    const titleEl = document.getElementById('modal-input-title');
    const labelEl = document.getElementById('modal-input-label');
    const inputEl = document.getElementById('modal-input-field');
    const okBtn   = document.getElementById('modal-input-ok');
    if (!modal || !inputEl || !okBtn) {
      // Fallback to the legacy native prompt if the modal markup is missing
      const r = window.prompt(opts.label || opts.title || '', opts.value || '');
      resolve(r == null ? null : String(r));
      return;
    }
    titleEl.textContent = opts.title || 'Input';
    labelEl.textContent = opts.label || '';
    labelEl.style.display = opts.label ? '' : 'none';
    inputEl.value = opts.value || '';
    inputEl.placeholder = opts.placeholder || '';
    inputEl.type = opts.type || 'text';
    okBtn.textContent = opts.okText || 'OK';

    const cancelEls = modal.querySelectorAll('[data-modal-input-cancel]');

    function cleanup(result) {
      modal.classList.remove('open');
      okBtn.removeEventListener('click', onOk);
      inputEl.removeEventListener('keydown', onKey);
      cancelEls.forEach(el => el.removeEventListener('click', onCancel));
      modal.removeEventListener('click', onBackdrop);
      document.removeEventListener('keydown', onEsc, true);
      resolve(result);
    }
    function onOk()     { cleanup(inputEl.value); }
    function onCancel() { cleanup(null); }
    function onKey(e) {
      if (e.key === 'Enter')  { e.preventDefault(); onOk(); }
      if (e.key === 'Escape') { e.preventDefault(); onCancel(); }
    }
    function onBackdrop(e) { if (e.target === modal) onCancel(); }
    function onEsc(e)      { if (e.key === 'Escape') { e.stopPropagation(); onCancel(); } }

    okBtn.addEventListener('click', onOk);
    inputEl.addEventListener('keydown', onKey);
    cancelEls.forEach(el => el.addEventListener('click', onCancel));
    modal.addEventListener('click', onBackdrop);
    document.addEventListener('keydown', onEsc, true);

    modal.classList.add('open');
    setTimeout(() => { inputEl.focus(); inputEl.select(); }, 50);
  });
}

// Themed in-app replacement for window.confirm / window.alert. Async.
//   await confirmDialog({ title, message, okText, cancelText, danger });
//   await alertDialog({ title, message, okText });
function confirmDialog(opts) {
  opts = opts || {};
  return new Promise(resolve => {
    const modal     = document.getElementById('modal-confirm');
    const titleEl   = document.getElementById('modal-confirm-title');
    const msgEl     = document.getElementById('modal-confirm-message');
    const okBtn     = document.getElementById('modal-confirm-ok-btn');
    const cancelBtn = document.getElementById('modal-confirm-cancel-btn');
    if (!modal || !okBtn) {
      const r = opts.alertOnly ? (window.alert(opts.message || opts.title || ''), true)
                               :  window.confirm(opts.message || opts.title || '');
      resolve(!!r);
      return;
    }
    titleEl.textContent = opts.title || (opts.alertOnly ? 'Notice' : 'Confirm');
    msgEl.textContent   = opts.message || '';
    okBtn.textContent   = opts.okText || 'OK';
    okBtn.classList.toggle('danger', !!opts.danger);
    if (cancelBtn) {
      cancelBtn.textContent  = opts.cancelText || 'Cancel';
      cancelBtn.style.display = opts.alertOnly ? 'none' : '';
    }
    // Close (X) is hidden in alert mode so the only way out is OK
    modal.querySelectorAll('.modal-close[data-modal-confirm-cancel]')
      .forEach(el => el.style.display = opts.alertOnly ? 'none' : '');

    const cancelEls = modal.querySelectorAll('[data-modal-confirm-cancel]');

    function cleanup(result) {
      modal.classList.remove('open');
      okBtn.classList.remove('danger');
      okBtn.removeEventListener('click', onOk);
      cancelEls.forEach(el => el.removeEventListener('click', onCancel));
      modal.removeEventListener('click', onBackdrop);
      document.removeEventListener('keydown', onKey, true);
      resolve(result);
    }
    function onOk()        { cleanup(true); }
    function onCancel()    { cleanup(false); }
    function onBackdrop(e) { if (e.target === modal && !opts.alertOnly) onCancel(); }
    function onKey(e) {
      if (e.key === 'Enter')  { e.preventDefault(); cleanup(true); }
      if (e.key === 'Escape') { e.preventDefault(); cleanup(opts.alertOnly ? true : false); }
    }
    okBtn.addEventListener('click', onOk);
    cancelEls.forEach(el => el.addEventListener('click', onCancel));
    modal.addEventListener('click', onBackdrop);
    document.addEventListener('keydown', onKey, true);

    modal.classList.add('open');
    setTimeout(() => okBtn.focus(), 50);
  });
}
function alertDialog(opts) {
  return confirmDialog(Object.assign({ alertOnly: true }, opts || {})).then(() => undefined);
}

function openModal(id)  { document.getElementById(id).classList.add('open'); }
function closeModal(id) {
  document.getElementById(id).classList.remove('open');
  if (['modal-robot', 'modal-meeting', 'modal-visit'].includes(id) && typeof pendingItemAttach !== 'undefined') {
    pendingItemAttach = null;
  }
  // Reset editing state
  editingVisitId = null; editingRobotId = null; editingTaskId = null;
  editingIssueId = null; editingMeetingId = null;
  // Reset modal titles/buttons to "add" mode
  const resets = {
    'modal-robot':     ['#modal-robot h3',     t('modal.add_new_list'),
                        'save-robot',          t('btn.add_list')],
    'modal-task':      ['#modal-task h3',       t('modal.add_task'),    'save-task',     t('btn.add_task')],
    'modal-issue':     ['#modal-issue h3',      t('modal.add_issue'),   'save-issue',    t('btn.add_issue')],
    'modal-visit':     ['#modal-visit h3',      t('modal.add_visit'),   'save-visit',    t('btn.add_visit')],
    'modal-meeting':   ['#modal-meeting h3',    t('modal.add_meeting'), 'save-meeting',  t('btn.add_meeting')],
  };
  const r = resets[id];
  if (r) {
    document.querySelector(r[0]).textContent = r[1];
    document.getElementById(r[2]).textContent = r[3];
  }
}

document.querySelectorAll('[data-close]').forEach(btn => {
  btn.addEventListener('click', () => closeModal(btn.dataset.close));
});
document.querySelectorAll('.modal-overlay').forEach(overlay => {
  overlay.addEventListener('click', e => {
    if (e.target === overlay) overlay.classList.remove('open');
  });
});

// Radio group logic
function initRadioGroup(groupId) {
  const group = document.getElementById(groupId);
  if (!group) return;
  group.querySelectorAll('.radio-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      group.querySelectorAll('.radio-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    });
  });
}
function getRadioValue(groupId) {
  const group = document.getElementById(groupId);
  if (!group) return null;
  const active = group.querySelector('.radio-btn.active');
  return active ? active.dataset.value : null;
}
function resetRadio(groupId, defaultVal) {
  const group = document.getElementById(groupId);
  if (!group) return;
  group.querySelectorAll('.radio-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.value === defaultVal);
  });
}

// ── ADD ROBOT ──────────────────────────────────────────
function openEntityModal(type) {
  addingEntityType = type;
  document.getElementById('robot-name').value = '';
  document.getElementById('robot-desc').value = '';
  const catEl = document.getElementById('robot-category');
  if (catEl) catEl.value = '';
  const isDaily = getMode() === 'daily';
  document.querySelector('#modal-robot h3').textContent     = isDaily ? t('modal.add_new_list')  : t('modal.add_new_project');
  document.getElementById('save-robot').textContent          = isDaily ? t('btn.add_list')       : t('btn.add_project');
  document.getElementById('robot-name-label').textContent    = isDaily ? t('label.list_name')    : t('label.project_name');
  refreshCategoryDatalist();
  // Default the Space dropdown to: pendingItemAttach.spaceId (if user clicked a Space's "+")
  // → currentSpaceId → first space
  if (typeof refreshSpaceSelect === 'function') {
    const targetSpace = (typeof pendingItemAttach !== 'undefined' && pendingItemAttach && pendingItemAttach.spaceId)
      || state.currentSpaceId
      || (state.spaces && state.spaces[0] && state.spaces[0].id);
    refreshSpaceSelect(targetSpace);
  }
  // Populate template dropdown — disabled when editing an existing list
  refreshTemplateSelect(!!editingRobotId);
  openModal('modal-robot');
  setTimeout(() => document.getElementById('robot-name').focus(), 50);
}

function refreshTemplateSelect(disabled) {
  ensureTemplatesState();
  const sel = document.getElementById('robot-template');
  const lbl = document.getElementById('robot-template-label');
  if (!sel) return;
  if (!state.templates.length) {
    if (lbl) lbl.style.display = 'none';
    sel.style.display = 'none';
    sel.value = '';
    return;
  }
  if (lbl) lbl.style.display = '';
  sel.style.display = '';
  sel.value = '';
  sel.disabled = !!disabled;
  sel.innerHTML = `<option value="">— No template —</option>` +
    state.templates.map(t =>
      `<option value="${escapeAttr(t.id)}">${escapeHtml(t.name)} (${(t.tasks || []).length} tasks)</option>`
    ).join('');
}

document.getElementById('add-robot-btn').addEventListener('click', () => openEntityModal('robot'));
const _addTopicBtn = document.getElementById('add-topic-btn');
if (_addTopicBtn) _addTopicBtn.addEventListener('click', () => openEntityModal('robot'));

document.getElementById('robot-name').addEventListener('keydown', e => {
  if (e.key === 'Enter') document.getElementById('save-robot').click();
});

document.getElementById('save-robot').addEventListener('click', () => {
  const name = document.getElementById('robot-name').value.trim();
  if (!name) { document.getElementById('robot-name').focus(); return; }
  const desc    = document.getElementById('robot-desc').value.trim();
  const catEl   = document.getElementById('robot-category');
  const category = catEl ? catEl.value.trim() : '';
  const spaceSelEl   = document.getElementById('robot-space');
  const targetSpaceId = spaceSelEl ? spaceSelEl.value : null;
  if (editingRobotId) {
    const robot = state.robots.find(r => r.id === editingRobotId);
    if (robot) { robot.name = name; robot.description = desc; robot.category = category; stampRobot(robot); }
    // v4: move list item to selected Space if changed
    if (targetSpaceId && typeof moveRobotToSpace === 'function') {
      moveRobotToSpace(editingRobotId, targetSpaceId);
      state.currentSpaceId = targetSpaceId;
    }
  } else {
    // Template-based creation: if a template is selected, spawn the
    // list with the template's tasks/subtasks already in place.
    const tplSel = document.getElementById('robot-template');
    const tplId = tplSel && tplSel.value;
    let robot;
    if (tplId) {
      robot = createListFromTemplate(tplId, targetSpaceId, name);
      if (robot) {
        robot.description = desc;
        robot.category = category;
        robot.mode = getMode();
      }
    }
    if (!robot) {
      robot = { id: uid(), name, description: desc, category, mode: getMode(), tasks: [], issues: [], createdAt: Date.now(), updatedAt: Date.now() };
      state.robots.push(robot);
      state.currentRobotId = robot.id;
      // Attach to selected Space (createListFromTemplate already did this for templates)
      if (targetSpaceId && typeof findSpace === 'function') {
        const sp = findSpace(targetSpaceId);
        if (sp) {
          const newItem = { id: uid(), type: 'list', refId: robot.id };
          sp.items.push(newItem);
          state.currentSpaceId = targetSpaceId;
          state.currentItemId  = newItem.id;
          if (typeof pendingItemAttach !== 'undefined') pendingItemAttach = null;
        }
      }
    } else {
      // createListFromTemplate already set currentRobotId + attached to space;
      // find the new item to update currentItemId
      const sp = findSpace(targetSpaceId || state.currentSpaceId);
      const it = sp && (sp.items || []).find(i => i.type === 'list' && i.refId === robot.id);
      if (it) state.currentItemId = it.id;
      if (typeof pendingItemAttach !== 'undefined') pendingItemAttach = null;
    }
  }
  save();
  renderRobotList();
  renderRobotDetail();
  if (typeof renderSidebar === 'function') renderSidebar();
  closeModal('modal-robot');
});

// ── ADD TASK ───────────────────────────────────────────
window.openTaskModal = function() {
  document.getElementById('task-title').value = '';
  resetRadio('task-priority-group', 'normal');
  resetRadio('task-status-group', 'active');
  initRadioGroup('task-priority-group');
  initRadioGroup('task-status-group');
  const dd = document.getElementById('task-due-date'); if (dd) dd.value = '';
  const ti = document.getElementById('task-tags-input'); if (ti) ti.value = '';
  const rc = document.getElementById('task-recurrence'); if (rc) rc.value = 'none';
  refreshAssigneeSelect('');
  renderTagPicker([]);
  openModal('modal-task');
  setTimeout(() => document.getElementById('task-title').focus(), 50);
};

// Populate the Assignee dropdown for a task. Members = owner + collaborators
// of the Space the current robot lives in. If the Space isn't shared (or
// has no members), the dropdown stays hidden so the modal stays compact
// for the personal-only use case.
// Returns all assignees for a task, handling both old (single) and new (array) format.
function getTaskAssignees(task) {
  if (!task) return [];
  if (Array.isArray(task.assignees) && task.assignees.length) return task.assignees;
  if (task.assignee && task.assignee.email) return [task.assignee];
  return [];
}

function taskAssignedToEmail(task, email) {
  if (!task || !email) return false;
  const target = String(email).toLowerCase();
  return getTaskAssignees(task).some(a => a && a.email && a.email.toLowerCase() === target);
}

function refreshAssigneeSelect(selectedEmails) {
  // selectedEmails: string (legacy single email) OR array of emails
  const selected = new Set(
    Array.isArray(selectedEmails)
      ? selectedEmails.map(e => (e || '').toLowerCase())
      : selectedEmails ? [selectedEmails.toLowerCase()] : []
  );
  const wrap = document.getElementById('task-assignees-wrap');
  const list = document.getElementById('task-assignees-list');
  const lbl  = document.getElementById('task-assignee-label');
  if (!wrap || !list) return;
  const robot = getCurrentContainer();
  const sp = robot && typeof findSpaceOfRobot === 'function' ? findSpaceOfRobot(robot.id) : null;
  if (!sp || !sp.shared) {
    wrap.style.display = 'none';
    if (lbl) lbl.style.display = 'none';
    list.innerHTML = '';
    return;
  }
  const members = collectSharedSpaceMembers(sp);
  if (!members.length) {
    wrap.style.display = 'none';
    if (lbl) lbl.style.display = 'none';
    list.innerHTML = '';
    return;
  }
  wrap.style.display = '';
  if (lbl) lbl.style.display = '';
  const me = (typeof DriveAPI !== 'undefined' && DriveAPI.getUserInfo && DriveAPI.getUserInfo()) || null;
  list.innerHTML = members.map(m => {
    const label = m.name || m.email;
    const youTag = me && m.email && me.email && m.email.toLowerCase() === me.email.toLowerCase() ? ' (you)' : '';
    const checked = selected.has((m.email || '').toLowerCase()) ? 'checked' : '';
    return `<label class="assignee-check-row">
      <input type="checkbox" class="assignee-cb" value="${escapeAttr(m.email)}" ${checked}>
      <span>${escapeHtml(label + youTag)}</span>
    </label>`;
  }).join('');
}

// Owner + collaborators with stable shape { email, name, picture, role }.
// Prefers sp.members (the safe list published in the space payload, available
// to all collaborators) so non-owners also see the full member list.
function collectSharedSpaceMembers(sp) {
  if (!sp) return [];

  // If the space carries a pre-built members list (from payload), use it —
  // it already contains owner + all collaborators with display names.
  if (Array.isArray(sp.members) && sp.members.length > 0) {
    const seen = new Set();
    return sp.members.filter(m => {
      if (!m || !m.email) return false;
      const k = m.email.toLowerCase();
      if (seen.has(k)) return false;
      seen.add(k);
      return true;
    });
  }

  // Fallback: build from raw owner + collaborators fields (owner-side only).
  const seen = new Set();
  const out = [];
  if (sp.ownerEmail) {
    seen.add(sp.ownerEmail.toLowerCase());
    out.push({
      email:   sp.ownerEmail,
      name:    sp.ownerName || sp.ownerEmail,
      picture: sp.ownerPicture || null,
      role:    'owner',
    });
  }
  (sp.collaborators || []).forEach(c => {
    if (!c || !c.email) return;
    const key = c.email.toLowerCase();
    if (seen.has(key)) return;
    seen.add(key);
    out.push({ email: c.email, name: c.name || c.email, picture: c.picture || null, role: c.role || 'reader' });
  });
  return out;
}

document.getElementById('task-title').addEventListener('keydown', e => {
  if (e.key === 'Enter') document.getElementById('save-task').click();
});

document.getElementById('save-task').addEventListener('click', () => {
  const title = document.getElementById('task-title').value.trim();
  if (!title) { document.getElementById('task-title').focus(); return; }
  const priority = getRadioValue('task-priority-group') || 'normal';
  const status   = getRadioValue('task-status-group')   || 'active';
  const dueDate  = (document.getElementById('task-due-date')?.value || '').trim();
  const tagsRaw  = (document.getElementById('task-tags-input')?.value || '').trim();
  const tags     = tagsRaw ? Array.from(new Set(tagsRaw.split(',').map(s => s.trim().toLowerCase()).filter(Boolean))) : [];
  const recVal   = (document.getElementById('task-recurrence')?.value || 'none');
  const recurrence = recVal && recVal !== 'none' ? { type: recVal } : null;
  // Collect all checked assignees from the checkbox list
  const robot = getCurrentContainer();
  if (!robot) return;
  const sp = typeof findSpaceOfRobot === 'function' ? findSpaceOfRobot(robot.id) : null;
  const checkedEmails = Array.from(
    document.querySelectorAll('#task-assignees-list .assignee-cb:checked')
  ).map(cb => cb.value.trim()).filter(Boolean);
  let assignees = [];
  if (checkedEmails.length && sp) {
    const members = collectSharedSpaceMembers(sp);
    assignees = checkedEmails.map(email => {
      const m = members.find(x => x.email && x.email.toLowerCase() === email.toLowerCase());
      return m ? { email: m.email, name: m.name || null, picture: m.picture || null }
               : { email, name: null, picture: null };
    });
  }
  // Keep legacy task.assignee pointing at first assignee for backward compat
  const assignee = assignees[0] || null;
  // Capture who did the assignment
  const meInfo = (typeof DriveAPI !== 'undefined' && DriveAPI.getUserInfo && DriveAPI.getUserInfo()) || null;
  const myEmail = (meInfo && meInfo.email) || null;
  if (editingTaskId) {
    const task = robot.tasks.find(t => t.id === editingTaskId);
    if (task) {
      const prevEmails = new Set(getTaskAssignees(task).map(a => a.email?.toLowerCase()));
      task.title = title; task.priority = priority; task.status = status;
      task.dueDate = dueDate || null; task.tags = tags;
      task.recurrence = recurrence;
      task.assignees = assignees;
      task.assignee  = assignee; // legacy compat
      // Mark assignedBy for newly-added assignees that aren't the editor themselves
      const newEmails = assignees.map(a => a.email?.toLowerCase());
      const hasNewOthers = newEmails.some(e => e && e !== myEmail?.toLowerCase() && !prevEmails.has(e));
      if (hasNewOthers && myEmail) {
        task.assignedBy = myEmail;
        task.assignedAt = Date.now();
      } else if (!assignees.length) {
        delete task.assignedBy;
        delete task.assignedAt;
      }
      stampTask(task);
    }
  } else {
    const hasNewOthers = assignees.some(a => a.email?.toLowerCase() !== myEmail?.toLowerCase());
    const assignedByEmail = (hasNewOthers && myEmail) ? myEmail : null;
    const newTask = {
      id: uid(), title, priority, status,
      dueDate: dueDate || null, tags, recurrence,
      assignees, assignee, // assignee = first for backward compat
      notebook: [], expanded: false, createdAt: Date.now(),
      updatedAt: Date.now(),
    };
    if (assignedByEmail) {
      newTask.assignedBy = assignedByEmail;
      newTask.assignedAt = Date.now();
    }
    robot.tasks.push(newTask);
  }
  stampRobot(robot);
  save();
  renderCurrentDetail();
  if (activeSection === 'topics') renderTopicList(); else renderRobotList();
  closeModal('modal-task');
});

// Tag picker — quick-pick chips for common categories
// Tag picker preset chips removed — users add their own freeform tags.
const COMMON_TAGS = [];
function renderTagPicker(active) {
  const host = document.getElementById('task-tag-picker');
  if (!host) return;
  const set = new Set((active || []).map(s => s.toLowerCase()));
  host.innerHTML = COMMON_TAGS.map(tag =>
    `<button type="button" class="tag-chip ${set.has(tag) ? 'active' : ''}" data-tag="${tag}">${tag}</button>`
  ).join('');
  host.querySelectorAll('.tag-chip').forEach(btn => {
    btn.addEventListener('click', () => {
      const input = document.getElementById('task-tags-input');
      const cur = (input.value || '').split(',').map(s => s.trim().toLowerCase()).filter(Boolean);
      const tag = btn.dataset.tag;
      const next = cur.includes(tag) ? cur.filter(t => t !== tag) : [...cur, tag];
      input.value = next.join(', ');
      btn.classList.toggle('active');
    });
  });
}

// ── ADD ISSUE ──────────────────────────────────────────
window.openIssueModal = function() {
  document.getElementById('issue-title').value = '';
  resetRadio('issue-severity-group', 'low');
  resetRadio('issue-status-group', 'open');
  initRadioGroup('issue-severity-group');
  initRadioGroup('issue-status-group');
  openModal('modal-issue');
  setTimeout(() => document.getElementById('issue-title').focus(), 50);
};

document.getElementById('issue-title').addEventListener('keydown', e => {
  if (e.key === 'Enter') document.getElementById('save-issue').click();
});

document.getElementById('save-issue').addEventListener('click', () => {
  const title = document.getElementById('issue-title').value.trim();
  if (!title) { document.getElementById('issue-title').focus(); return; }
  const severity = getRadioValue('issue-severity-group') || 'low';
  const status   = getRadioValue('issue-status-group')   || 'open';
  const robot = getCurrentContainer();
  if (!robot) return;
  if (!robot.issues) robot.issues = [];
  if (editingIssueId) {
    const issue = robot.issues.find(i => i.id === editingIssueId);
    if (issue) { issue.title = title; issue.severity = severity; issue.status = status; }
  } else {
    robot.issues.push({ id: uid(), title, severity, status, notebook: [], expanded: false, createdAt: Date.now() });
  }
  save();
  if (activeSection === 'topics') topicTab = 'issues'; else robotTab = 'issues';
  renderCurrentDetail();
  closeModal('modal-issue');
});

// ── FIELD VISITS ───────────────────────────────────────
const MONTHS = ['JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEP','OCT','NOV','DEC'];

function renderVisits() {
  // Visits are global (mode-agnostic) — people travel for work and for life
  // intentionally NOT using visitsByMode here
  const list = document.getElementById('visits-list');
  const sorted = (state.fieldVisits || []).slice().sort((a, b) => a.date.localeCompare(b.date));

  if (!sorted.length) {
    list.innerHTML = `
      <div class="empty-visits">
        <div class="empty-icon">${ICO.plane}</div>
        <p>${t('empty.no_visits')}</p>
      </div>`;
    return;
  }

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  list.innerHTML = sorted.map(visit => {
    const d = new Date(visit.date + 'T00:00:00');
    const diff = Math.round((d - today) / 86400000);

    let badge = '';
    if (diff < 0)       badge = `<span class="days-badge past">${t('days.past', { n: Math.abs(diff) })}</span>`;
    else if (diff === 0) badge = `<span class="days-badge today">${t('days.today')}</span>`;
    else if (diff <= 14) badge = `<span class="days-badge soon">${t('days.future', { n: diff })}</span>`;
    else                 badge = `<span class="days-badge future">${t('days.future', { n: diff })}</span>`;

    const dateStr = `${d.getDate()} ${MONTHS[d.getMonth()]} ${d.getFullYear()}`;
    return `
      <div class="visit-row" id="visit-${visit.id}">
        <div class="visit-row-main">
          <span class="visit-row-icon">${ICO.pin}</span>
          <span class="visit-row-body">
            <span class="visit-row-title">${escapeHtml(visit.location)}</span>
            <span class="visit-row-meta">
              <span class="visit-row-date">${dateStr}</span>
              ${visit.robot ? `<span class="visit-row-tag">${ICO.bot} ${escapeHtml(visit.robot)}</span>` : ''}
              ${badge}
            </span>
            ${visit.notes ? `<span class="visit-row-notes">${escapeHtml(visit.notes)}</span>` : ''}
            ${renderAttachments('visit', visit.id, visit.attachments)}
          </span>
        </div>
        <div class="visit-row-actions">
          <button class="btn-sm" onclick="editVisit('${visit.id}')">${t('btn.edit')}</button>
          <button class="btn-sm danger" onclick="deleteVisit('${visit.id}')">${t('btn.delete')}</button>
        </div>
      </div>
    `;
  }).join('');
}

window.deleteVisit = async function(id) {
  if (!(await confirmDialog({ message: t('conf.delete_visit'), danger: true, okText: t('btn.delete') || 'Delete' }))) return;
  state.fieldVisits = state.fieldVisits.filter(v => v.id !== id);
  save();
  renderVisits();
};

// Add Visit Modal
document.getElementById('add-visit-btn').addEventListener('click', () => {
  document.getElementById('visit-location').value = '';
  document.getElementById('visit-date').value = '';
  document.getElementById('visit-robot').value = '';
  document.getElementById('visit-notes').value = '';
  openModal('modal-visit');
  setTimeout(() => document.getElementById('visit-location').focus(), 50);
});

document.getElementById('save-visit').addEventListener('click', () => {
  const location = document.getElementById('visit-location').value.trim();
  const date     = document.getElementById('visit-date').value;
  if (!location || !date) {
    if (!location) document.getElementById('visit-location').focus();
    else document.getElementById('visit-date').focus();
    return;
  }
  const robot = document.getElementById('visit-robot').value.trim();
  const notes = document.getElementById('visit-notes').value.trim();
  if (editingVisitId) {
    const visit = state.fieldVisits.find(v => v.id === editingVisitId);
    if (visit) { visit.location = location; visit.date = date; visit.robot = robot; visit.notes = notes; }
  } else {
    state.fieldVisits.push({ id: uid(), location, date, robot, notes, mode: getMode(), createdAt: Date.now() });
  }
  save();
  renderVisits();
  closeModal('modal-visit');
});

// ── MEETINGS ───────────────────────────────────────────
const MTG_MONTHS = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

function closeMeetingDetail() {
  state.currentMeetingId = null;
  const sectionEl = document.getElementById('meetings');
  if (sectionEl) sectionEl.removeAttribute('data-detail-open');
  if (typeof renderMeetingList === 'function') renderMeetingList();
  if (typeof renderMeetingDetail === 'function') renderMeetingDetail();
}

function renderMeetingList() {
  const list = document.getElementById('meeting-list');
  if (!list) return;
  if (!state.meetings) state.meetings = [];
  const sorted = meetingsByMode().sort((a, b) => b.date.localeCompare(a.date));
  if (!sorted.length) {
    list.innerHTML = `<div style="padding:16px;text-align:center;color:var(--muted);font-size:13px;">${t('empty.no_meetings')}</div>`;
    return;
  }
  list.innerHTML = sorted.map(m => {
    const d = new Date(m.date + 'T00:00:00');
    const dateStr = `${d.getDate()} ${MTG_MONTHS[d.getMonth()]} ${d.getFullYear()}`;
    const openActions = (m.actions || []).filter(a => !a.done).length;
    const isSelected = m.id === state.currentMeetingId;
    return `
      <div class="robot-item ${isSelected ? 'active' : ''}" data-meeting-id="${m.id}">
        <div class="robot-avatar mtg-avatar">${ICO.usersAvatar}</div>
        <div class="robot-item-info">
          <div class="robot-item-name">${escapeHtml(m.title)}</div>
          <div class="robot-item-count">${dateStr}${openActions ? ` · ${t('count.actions_short', {open: openActions})}` : ''}</div>
        </div>
      </div>`;
  }).join('');
  list.querySelectorAll('.robot-item').forEach(item => {
    item.addEventListener('click', () => {
      state.currentMeetingId = item.dataset.meetingId;
      renderMeetingList();
      renderMeetingDetail();
    });
  });
}

function renderMeetingDetail() {
  const content = document.getElementById('meeting-content');
  const sectionEl = document.getElementById('meetings');
  if (!content) return;
  const meeting = (state.meetings || []).find(m => m.id === state.currentMeetingId);
  if (!meeting) {
    if (sectionEl) sectionEl.removeAttribute('data-detail-open');
    content.innerHTML = `<div class="empty-state"><div class="empty-icon">${ICO.users}</div><p>${t('empty.select_meeting')}</p></div>`;
    return;
  }
  if (sectionEl) sectionEl.setAttribute('data-detail-open', 'true');
  const d = new Date(meeting.date + 'T00:00:00');
  const dateStr = `${d.getDate()} ${MTG_MONTHS[d.getMonth()]} ${d.getFullYear()}`;
  const actions = meeting.actions || [];
  const doneCount = actions.filter(a => a.done).length;

  content.innerHTML = `
    <div class="md-detail-head">
      <button class="md-back-btn" onclick="closeMeetingDetail()" aria-label="Back" title="Back">
        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
      </button>
      <h2 class="md-detail-title">${escapeHtml(meeting.title)}</h2>
      <div class="md-detail-actions">
        <button class="btn-sm" onclick="editMeeting('${meeting.id}')">Edit</button>
        <button class="btn-sm danger" onclick="deleteMeeting('${meeting.id}')">Delete</button>
      </div>
    </div>
    <div class="md-detail-meta">
      <span>${ICO.calendar} ${dateStr}</span>
      ${meeting.location  ? `<span>${ICO.pin} ${escapeHtml(meeting.location)}</span>`   : ''}
      ${meeting.attendees ? `<span>${ICO.group} ${escapeHtml(meeting.attendees)}</span>` : ''}
    </div>

    <div class="dsection">
      <div class="dsection-header">
        <div class="dsection-label">${t('meeting.notes_label')}</div>
        <div class="save-indicator" id="mtg-save-ind">Saved</div>
      </div>
      <textarea class="brainstorm-area" id="mtg-notes-area"
        placeholder="${t('ph.brainstorm_notes')}"
      >${escapeHtml(meeting.notes || '')}</textarea>
    </div>

    ${renderAttachments('meeting', meeting.id, meeting.attachments)}

    <div class="dsection">
      <div class="dsection-header">
        <div class="dsection-label">${t('task.actions_label')} <span class="count-pill">${doneCount}/${actions.length}</span></div>
      </div>
      <div id="mtg-actions-list">
        ${actions.map(a => `
          <div class="action-item ${a.done ? 'done' : ''}" id="action-${a.id}">
            <button class="action-check ${a.done ? 'checked' : ''}" onclick="toggleMeetingAction('${meeting.id}','${a.id}')" aria-label="${t('aria.completed')}">
              ${a.done ? ICO.checkSm : ''}
            </button>
            <span class="action-text">${escapeHtml(a.text)}</span>
            <button class="nb-delete-btn" onclick="deleteMeetingAction('${meeting.id}','${a.id}')" aria-label="${t('aria.delete')}">${ICO.close}</button>
          </div>`).join('')}
      </div>
      <div class="action-input-row">
        <input type="text" class="action-input" id="mtg-action-input"
          placeholder="${t('ph.action_item')}"
          onkeydown="if(event.key==='Enter'){event.preventDefault();addMeetingAction('${meeting.id}')}" />
        <button class="action-add-btn" onclick="addMeetingAction('${meeting.id}')">${t('btn.add_short')}</button>
      </div>
    </div>
  `;
  attachMeetingNotes(meeting.id);
}

let mtgNotesTimer;
function attachMeetingNotes(meetingId) {
  const area = document.getElementById('mtg-notes-area');
  const ind  = document.getElementById('mtg-save-ind');
  if (!area) return;
  area.addEventListener('input', () => {
    clearTimeout(mtgNotesTimer);
    mtgNotesTimer = setTimeout(() => {
      const m = (state.meetings || []).find(m => m.id === meetingId);
      if (m) { m.notes = area.value; save(); }
      ind.classList.add('show');
      setTimeout(() => ind.classList.remove('show'), 1500);
    }, 600);
  });
}

window.addMeetingAction = function(meetingId) {
  const m = (state.meetings || []).find(m => m.id === meetingId);
  const input = document.getElementById('mtg-action-input');
  const text = input ? input.value.trim() : '';
  if (!text || !m) { if (input) input.focus(); return; }
  if (!m.actions) m.actions = [];
  m.actions.push({ id: uid(), text, done: false, createdAt: Date.now() });
  save();
  renderMeetingDetail();
};

window.toggleMeetingAction = function(meetingId, actionId) {
  const m = (state.meetings || []).find(m => m.id === meetingId);
  const a = m && (m.actions || []).find(a => a.id === actionId);
  if (!a) return;
  a.done = !a.done;
  save();
  renderMeetingDetail();
};

window.deleteMeetingAction = function(meetingId, actionId) {
  const m = (state.meetings || []).find(m => m.id === meetingId);
  if (!m) return;
  m.actions = (m.actions || []).filter(a => a.id !== actionId);
  save();
  renderMeetingDetail();
};

window.deleteMeeting = async function(id) {
  if (!(await confirmDialog({ message: t('conf.delete_meeting'), danger: true, okText: t('btn.delete') || 'Delete' }))) return;
  state.meetings = (state.meetings || []).filter(m => m.id !== id);
  if (state.currentMeetingId === id) state.currentMeetingId = null;
  save();
  renderMeetingList();
  renderMeetingDetail();
};

window.editMeeting = function(id) {
  const m = (state.meetings || []).find(m => m.id === id);
  if (!m) return;
  editingMeetingId = id;
  document.getElementById('meeting-title').value     = m.title;
  document.getElementById('meeting-date').value      = m.date;
  document.getElementById('meeting-location').value  = m.location || '';
  document.getElementById('meeting-attendees').value = m.attendees || '';
  document.getElementById('meeting-robot').value     = m.robot || '';
  document.querySelector('#modal-meeting h3').textContent  = t('modal.edit_meeting');
  document.getElementById('save-meeting').textContent      = t('btn.save_changes');
  openModal('modal-meeting');
  setTimeout(() => document.getElementById('meeting-title').focus(), 50);
};

// Add Meeting button
document.getElementById('add-meeting-btn').addEventListener('click', () => {
  document.getElementById('meeting-title').value     = '';
  document.getElementById('meeting-date').value      = new Date().toISOString().slice(0, 10);
  document.getElementById('meeting-location').value  = '';
  document.getElementById('meeting-attendees').value = '';
  document.getElementById('meeting-robot').value     = '';
  editingMeetingId = null;
  openModal('modal-meeting');
  setTimeout(() => document.getElementById('meeting-title').focus(), 50);
});

document.getElementById('save-meeting').addEventListener('click', () => {
  const title = document.getElementById('meeting-title').value.trim();
  const date  = document.getElementById('meeting-date').value;
  if (!title) { document.getElementById('meeting-title').focus(); return; }
  if (!date)  { document.getElementById('meeting-date').focus();  return; }
  const location  = document.getElementById('meeting-location').value.trim();
  const attendees = document.getElementById('meeting-attendees').value.trim();
  const robot     = document.getElementById('meeting-robot').value.trim();
  if (!state.meetings) state.meetings = [];
  if (editingMeetingId) {
    const m = state.meetings.find(m => m.id === editingMeetingId);
    if (m) { m.title = title; m.date = date; m.location = location; m.attendees = attendees; m.robot = robot; }
  } else {
    const m = { id: uid(), title, date, location, attendees, robot, notes: '', actions: [], mode: getMode(), createdAt: Date.now() };
    state.meetings.push(m);
    state.currentMeetingId = m.id;
  }
  save();
  renderMeetingList();
  renderMeetingDetail();
  closeModal('modal-meeting');
});

// ── ATTACHMENTS ────────────────────────────────────────
const ATT_PAPERCLIP = '<svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"/></svg>';
const ATT_FILE      = '<svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/></svg>';
const MAX_ATTACHMENT_BYTES = 25 * 1024 * 1024;
const MAX_PHOTO_BYTES      = 10 * 1024 * 1024; // 10 MB per photo

// Compress an image File to a small base64 JPEG thumbnail for offline preview
function compressPhotoPreview(file, maxSize = 240, quality = 0.72) {
  return new Promise(resolve => {
    const img = new Image();
    const url = URL.createObjectURL(file);
    img.onload = () => {
      URL.revokeObjectURL(url);
      let w = img.naturalWidth, h = img.naturalHeight;
      if (w > h) { if (w > maxSize) { h = Math.round(h * maxSize / w); w = maxSize; } }
      else        { if (h > maxSize) { w = Math.round(w * maxSize / h); h = maxSize; } }
      const canvas = document.createElement('canvas');
      canvas.width = w; canvas.height = h;
      canvas.getContext('2d').drawImage(img, 0, 0, w, h);
      resolve(canvas.toDataURL('image/jpeg', quality));
    };
    img.onerror = () => { URL.revokeObjectURL(url); resolve(null); };
    img.src = url;
  });
}

function formatSize(bytes) {
  if (!bytes && bytes !== 0) return '';
  if (bytes < 1024) return bytes + ' B';
  if (bytes < 1024 * 1024) return Math.round(bytes / 1024) + ' KB';
  if (bytes < 1024 * 1024 * 1024) return (bytes / (1024 * 1024)).toFixed(1) + ' MB';
  return (bytes / (1024 * 1024 * 1024)).toFixed(2) + ' GB';
}

function isDriveStorageQuotaError(err) {
  const reasonText = [
    err && err.driveReason,
    err && Array.isArray(err.driveReasons) ? err.driveReasons.join(' ') : '',
    err && err.message,
  ].filter(Boolean).join(' ');
  return !!(err && err.isDriveStorageFull) || /storageQuotaExceeded|storage quota|quota.*exceeded/i.test(reasonText);
}

function driveStorageMessage() {
  return t('drive.storage_full_msg') || 'Google Drive storage may be full. Free up storage and try again.';
}

async function showDriveStorageAlert(err) {
  if (!isDriveStorageQuotaError(err)) return false;
  if (typeof alertDialog === 'function') {
    await alertDialog({
      title: t('drive.storage_full_title') || 'Drive storage may be full',
      message: driveStorageMessage(),
    });
  }
  return true;
}

function findEntity(type, id) {
  if (type === 'task') {
    const c = getCurrentContainer();
    return c && (c.tasks || []).find(x => x.id === id);
  }
  if (type === 'issue') {
    const c = getCurrentContainer();
    return c && (c.issues || []).find(x => x.id === id);
  }
  if (type === 'meeting') return (state.meetings || []).find(x => x.id === id);
  if (type === 'visit')   return (state.fieldVisits || []).find(x => x.id === id);
  return null;
}

function renderAttachments(type, id, attachments) {
  const list = (attachments || []);
  const totalSize = list.reduce((sum, a) => sum + (a.size || 0), 0);
  const largeCount = list.filter(a => (a.size || 0) >= 10 * 1024 * 1024).length;
  const items = list.map(a => `
    <div class="att-chip" data-filename="${escapeAttr(a.filename)}">
      <span class="att-ico">${ATT_FILE}</span>
      <span class="att-name" onclick="openAttachment('${escapeJsArg(type)}','${escapeJsArg(id)}','${escapeJsArg(a.filename)}')" title="${escapeAttr(a.originalName)}">${escapeHtml(a.originalName)}</span>
      <span class="att-size">${formatSize(a.size)}</span>
      <button class="att-del" onclick="deleteAttachment('${escapeJsArg(type)}','${escapeJsArg(id)}','${escapeJsArg(a.filename)}')" title="${escapeAttr(t('btn.delete'))}">${ICO.close}</button>
    </div>
  `).join('');
  return `
    <div class="att-section">
      <div class="att-section-head">
        <span class="att-label">${ATT_PAPERCLIP} <span>${t('att.section')}${list.length ? ` <span class="count-pill">${list.length}</span>` : ''}</span></span>
        <div class="att-head-actions">
          ${list.length ? `<span class="att-total">${formatSize(totalSize)}${largeCount ? ` · ${largeCount} large` : ''}</span>` : ''}
          <button class="att-add-btn" onclick="attachFiles('${escapeJsArg(type)}','${escapeJsArg(id)}')">${t('att.add')}</button>
        </div>
      </div>
      ${list.length ? `<button class="att-manage-btn" type="button" onclick="showAttachmentCleanup('${escapeJsArg(type)}','${escapeJsArg(id)}')">Manage attachments</button>` : ''}
      ${items ? `<div class="att-list">${items}</div>` : ''}
    </div>
  `;
}

window.showAttachmentCleanup = async function(type, id) {
  const entity = findEntity(type, id);
  const list = ((entity && entity.attachments) || []).slice().sort((a, b) => (b.size || 0) - (a.size || 0));
  if (!list.length) return;
  const lines = list.slice(0, 8).map(a => `${a.originalName || a.filename} - ${formatSize(a.size || 0)}`).join('\n');
  await alertDialog({
    title: 'Attachment cleanup',
    message: `Largest files here:\n\n${lines}\n\nUse the x next to an attachment to remove it from B-Less and Drive.`,
  });
};

// Trigger file picker for an entity (PWA — Drive must be connected)
window.attachFiles = function(type, id) {
  if (!DriveAPI || !DriveAPI.isSignedIn()) {
    alertDialog({ message: t('att.signin_required') });
    return;
  }
  let input = document.getElementById('att-file-input');
  if (!input) {
    input = document.createElement('input');
    input.type = 'file';
    input.id = 'att-file-input';
    input.multiple = true;
    input.style.display = 'none';
    document.body.appendChild(input);
    input.addEventListener('change', handleAttachUpload);
  }
  input.dataset.entityType = type;
  input.dataset.entityId   = id;
  input.click();
};

async function handleAttachUpload(e) {
  const input = e.target;
  const type  = input.dataset.entityType;
  const id    = input.dataset.entityId;
  const files = Array.from(input.files || []);
  input.value = '';
  if (!files.length) return;

  const validFiles = [];
  for (const file of files) {
    if (file.size > MAX_ATTACHMENT_BYTES) {
      await alertDialog({
        title: t('att.too_big_title'),
        message: t('att.too_big', { name: file.name, size: formatSize(file.size), max: formatSize(MAX_ATTACHMENT_BYTES) }),
      });
      continue;
    }
    validFiles.push(file);
  }
  if (!validFiles.length) return;

  const totalSize = validFiles.reduce((sum, file) => sum + (file.size || 0), 0);
  const fileLines = validFiles.map(file => `${file.name} (${formatSize(file.size)})`).join('\n');
  const proceed = await confirmDialog({
    title: t('att.upload_title'),
    message: t('att.upload_confirm', { count: validFiles.length, size: formatSize(totalSize), files: fileLines }),
    okText: t('att.upload_ok'),
  });
  if (!proceed) return;

  for (const file of validFiles) {
    try {
      const result = await DriveAPI.saveAttachment(id, file.name, file);
      const entity = findEntity(type, id);
      if (entity) {
        if (!entity.attachments) entity.attachments = [];
        entity.attachments.push({
          filename:     result.filename,
          originalName: file.name,
          size:         result.size,
          addedAt:      Date.now(),
        });
      }
    } catch (err) {
      if (!(await showDriveStorageAlert(err))) {
        await alertDialog({ message: t('att.failed', { msg: err.message || err }) });
      }
    }
  }
  save();
  if (typeof BackupManager !== 'undefined' && BackupManager.refreshStorageUsage) {
    BackupManager.refreshStorageUsage(true);
  }
  // Re-render whichever detail view is active
  if (typeof renderCurrentDetail === 'function') renderCurrentDetail();
  if (type === 'meeting' && typeof renderMeetingDetail === 'function') renderMeetingDetail();
  if (type === 'visit'   && typeof renderVisits === 'function') renderVisits();
}

function readFileAsBase64(file) {
  return new Promise((resolve, reject) => {
    const r = new FileReader();
    r.onload = () => resolve(r.result);
    r.onerror = reject;
    r.readAsDataURL(file);
  });
}

window.openAttachment = async function(type, id, filename) {
  if (!DriveAPI.isSignedIn()) return;
  try { await DriveAPI.openAttachment(id, filename); } catch (e) { console.warn(e); }
};

window.deleteAttachment = async function(type, id, filename) {
  if (!(await confirmDialog({ message: t('att.confirm_delete'), danger: true, okText: t('btn.delete') || 'Delete' }))) return;
  if (DriveAPI.isSignedIn()) {
    try { await DriveAPI.deleteAttachment(id, filename); } catch (err) { await showDriveStorageAlert(err); }
  }
  const entity = findEntity(type, id);
  if (entity && entity.attachments) {
    entity.attachments = entity.attachments.filter(a => a.filename !== filename);
    save();
    if (typeof renderCurrentDetail === 'function') renderCurrentDetail();
    if (type === 'meeting' && typeof renderMeetingDetail === 'function') renderMeetingDetail();
    if (type === 'visit'   && typeof renderVisits === 'function') renderVisits();
    if (typeof BackupManager !== 'undefined' && BackupManager.refreshStorageUsage) {
      BackupManager.refreshStorageUsage(true);
    }
  }
};

// ── PHOTOS ─────────────────────────────────────────────
window.attachPhotos = function(taskId) {
  if (!DriveAPI || !DriveAPI.isSignedIn()) {
    alertDialog({ message: 'Fotoğraf eklemek için Google Drive bağlantısı gerekli.' });
    return;
  }
  let input = document.getElementById('photo-file-input');
  if (!input) {
    input = document.createElement('input');
    input.type = 'file';
    input.id = 'photo-file-input';
    input.multiple = true;
    input.accept = 'image/*';
    input.style.display = 'none';
    document.body.appendChild(input);
    input.addEventListener('change', handlePhotoUpload);
  }
  input.dataset.taskId = taskId;
  input.click();
};

async function handlePhotoUpload(e) {
  const input  = e.target;
  const taskId = input.dataset.taskId;
  const files  = Array.from(input.files || []);
  input.value  = '';
  if (!files.length) return;

  let foundTask = null;
  for (const r of (state.robots || [])) {
    const t = (r.tasks || []).find(t => t.id === taskId);
    if (t) { foundTask = t; break; }
  }
  if (!foundTask) return;

  for (const file of files) {
    if (!file.type.startsWith('image/')) continue;
    if (file.size > MAX_PHOTO_BYTES) {
      alertDialog({ message: `"${file.name}" çok büyük (max 10 MB).` });
      continue;
    }
    try {
      const preview = await compressPhotoPreview(file);
      const result  = await DriveAPI.savePhoto(taskId, file.name, file);
      if (!foundTask.photos) foundTask.photos = [];
      foundTask.photos.push({
        id:       uid(),
        fileId:   result.fileId,
        filename: result.filename,
        size:     result.size,
        preview,
        addedAt:  Date.now(),
      });
    } catch (err) {
      if (!(await showDriveStorageAlert(err))) {
        await alertDialog({ message: `Yükleme hatası: ${err.message || err}` });
      }
    }
  }
  save();
  if (typeof BackupManager !== 'undefined' && BackupManager.refreshStorageUsage) {
    BackupManager.refreshStorageUsage(true);
  }
  renderCurrentDetail();
}

window.deleteTaskPhoto = async function(taskId, photoId) {
  if (!(await confirmDialog({ message: 'Fotoğraf silinsin mi?', danger: true, okText: 'Sil' }))) return;
  let foundTask = null;
  for (const r of (state.robots || [])) {
    const t = (r.tasks || []).find(t => t.id === taskId);
    if (t) { foundTask = t; break; }
  }
  if (!foundTask) return;
  const photo = (foundTask.photos || []).find(p => p.id === photoId);
  if (!photo) return;
  if (DriveAPI && DriveAPI.isSignedIn() && photo.fileId) {
    try { await DriveAPI.deletePhoto(photo.fileId); } catch (err) { await showDriveStorageAlert(err); }
  }
  foundTask.photos = (foundTask.photos || []).filter(p => p.id !== photoId);
  save();
  if (typeof BackupManager !== 'undefined' && BackupManager.refreshStorageUsage) {
    BackupManager.refreshStorageUsage(true);
  }
  renderCurrentDetail();
};

window.openTaskPhoto = async function(taskId, photoId) {
  let foundTask = null;
  for (const r of (state.robots || [])) {
    const t = (r.tasks || []).find(t => t.id === taskId);
    if (t) { foundTask = t; break; }
  }
  if (!foundTask) return;
  const photo = (foundTask.photos || []).find(p => p.id === photoId);
  if (!photo) return;

  const existing = document.getElementById('photo-lightbox');
  if (existing) existing.remove();

  const lb = document.createElement('div');
  lb.id = 'photo-lightbox';
  lb.innerHTML = `
    <div class="photo-lb-overlay" onclick="closePhotoLightbox()"></div>
    <div class="photo-lb-content">
      <img class="photo-lb-img" src="${escapeAttr(photo.preview || '')}" alt="${escapeAttr(photo.filename)}">
      <button class="photo-lb-close" onclick="closePhotoLightbox()" aria-label="Kapat">×</button>
    </div>
  `;
  document.body.appendChild(lb);

  // Load full-size from Drive in the background
  if (DriveAPI && DriveAPI.isSignedIn() && photo.fileId) {
    DriveAPI.downloadPhoto(photo.fileId).then(blob => {
      const url = URL.createObjectURL(blob);
      const img = lb.querySelector('.photo-lb-img');
      if (!img) { URL.revokeObjectURL(url); return; }
      const full = new Image();
      full.onload = () => { img.src = url; };
      full.src = url;
    }).catch(() => {});
  }
};

window.closePhotoLightbox = function() {
  const lb = document.getElementById('photo-lightbox');
  if (lb) lb.remove();
};

document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && document.getElementById('photo-lightbox')) closePhotoLightbox();
});

function renderTaskPhotos(task) {
  const photos = task.photos || [];
  const ICO_PHOTO = '<svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>';
  const items = photos.map(p => `
    <div class="photo-thumb-wrap">
      <img class="photo-thumb" src="${escapeAttr(p.preview || '')}" alt="${escapeAttr(p.filename)}"
           onclick="openTaskPhoto('${escapeAttr(task.id)}','${escapeAttr(p.id)}')" loading="lazy">
      <button class="photo-thumb-del" onclick="event.stopPropagation();deleteTaskPhoto('${escapeAttr(task.id)}','${escapeAttr(p.id)}')" title="Sil">×</button>
    </div>
  `).join('');
  return `
    <div class="photo-section">
      <div class="att-section-head">
        <span class="att-label">${ICO_PHOTO}<span>Fotoğraflar${photos.length ? ` <span class="count-pill">${photos.length}</span>` : ''}</span></span>
        <button class="att-add-btn" onclick="attachPhotos('${escapeAttr(task.id)}')">+ Ekle</button>
      </div>
      ${items ? `<div class="photo-grid">${items}</div>` : ''}
    </div>
  `;
}

// ── DRIVE API (PWA / browser path) ─────────────────────
// Uses Google Identity Services + Drive REST API.
// Same folder structure as Electron path: Drive/B-Less/{b-less-backup.json, attachments/<id>/<file>}
const DriveAPI = (() => {
  const CLIENT_ID = '733970458049-nh53ksvtjaavj0p5up5bs89jd78t9rf9.apps.googleusercontent.com';
  // drive (full Drive read/write) is required so collaborators can discover
  // shared Space files in their own Drive ("Shared with me") — drive.file
  // alone only exposes files this app created or the user picked via the
  // Drive Picker dialog. The trade-off is that the OAuth consent screen
  // says "see, edit, create, and delete all your Google Drive files".
  // We still only read/write a private B-Less folder + shared space files.
  // email + profile = needed to display the connected account
  const SCOPE = 'https://www.googleapis.com/auth/drive https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile';

  let tokenClient = null;
  let accessToken = null;
  let tokenExpiry = 0;
  let folderId    = null;
  let userInfo    = null; // { email, name }

  function isLibraryReady() {
    return typeof window.google !== 'undefined' && window.google.accounts && window.google.accounts.oauth2;
  }

  async function waitForLibrary(timeoutMs = 8000) {
    if (isLibraryReady()) return true;
    const t0 = Date.now();
    return new Promise(resolve => {
      const iv = setInterval(() => {
        if (isLibraryReady()) { clearInterval(iv); resolve(true); }
        else if (Date.now() - t0 > timeoutMs) { clearInterval(iv); resolve(false); }
      }, 80);
    });
  }

  function makeTokenClient(callback) {
    return google.accounts.oauth2.initTokenClient({
      client_id: CLIENT_ID,
      scope: SCOPE,
      callback,
    });
  }

  function isExpired() { return !accessToken || Date.now() >= tokenExpiry - 30_000; }

  // Try silent re-auth (no popup) — works if the user already granted permission
  async function trySilentSignIn() {
    if (!await waitForLibrary()) return false;
    return new Promise(resolve => {
      const tc = makeTokenClient(async resp => {
        if (resp.error) { resolve(false); return; }
        accessToken = resp.access_token;
        tokenExpiry = Date.now() + (resp.expires_in || 3600) * 1000;
        try { await fetchUserInfo(); } catch {}
        resolve(true);
      });
      // Passing the cached email as login_hint helps GSI pick the right
      // session and noticeably improves silent re-auth success in standalone
      // PWAs where the iframe doesn't always share session state cleanly.
      const opts = { prompt: 'none' };
      if (userInfo && userInfo.email) opts.hint = userInfo.email;
      try { tc.requestAccessToken(opts); } catch { resolve(false); }
    });
  }

  // Interactive sign-in (user clicks button)
  async function signIn() {
    if (!await waitForLibrary()) throw new Error('Google library failed to load');
    return new Promise((resolve, reject) => {
      tokenClient = makeTokenClient(async resp => {
        if (resp.error) { reject(resp); return; }
        accessToken = resp.access_token;
        tokenExpiry = Date.now() + (resp.expires_in || 3600) * 1000;
        try { await fetchUserInfo(); } catch {}
        resolve();
      });
      tokenClient.requestAccessToken({ prompt: 'consent' });
    });
  }

  function signOut() {
    if (accessToken) try { google.accounts.oauth2.revoke(accessToken, () => {}); } catch {}
    accessToken = null; tokenExpiry = 0; folderId = null; userInfo = null;
    try { localStorage.removeItem('b-less-drive-user'); } catch {}
    if (typeof window.onDriveUserChange === 'function') {
      try { window.onDriveUserChange(null); } catch {}
    }
  }

  async function fetchUserInfo() {
    const r = await fetch('https://www.googleapis.com/oauth2/v3/userinfo', {
      headers: { Authorization: 'Bearer ' + accessToken },
    });
    if (!r.ok) return;
    const data = await r.json();
    userInfo = { email: data.email, name: data.name, picture: data.picture };
    try { localStorage.setItem('b-less-drive-user', JSON.stringify(userInfo)); } catch {}
    if (typeof window.celebrateIfBeloved === 'function') {
      try { window.celebrateIfBeloved(userInfo.email); } catch {}
    }
    if (typeof window.onDriveUserChange === 'function') {
      try { window.onDriveUserChange(userInfo); } catch {}
    }
  }

  async function ensureToken() {
    if (!isExpired()) return accessToken;
    const ok = await trySilentSignIn();
    if (!ok) throw new Error('Token expired and silent reauth failed');
    return accessToken;
  }

  function makeDriveError(method, status, text) {
    let parsed = null;
    try { parsed = text ? JSON.parse(text) : null; } catch {}
    const apiError = parsed && parsed.error;
    const reasons = [];
    if (apiError && Array.isArray(apiError.errors)) {
      apiError.errors.forEach(e => { if (e && e.reason) reasons.push(e.reason); });
    }
    if (apiError && Array.isArray(apiError.details)) {
      apiError.details.forEach(d => { if (d && d.reason) reasons.push(d.reason); });
    }
    const message = (apiError && apiError.message) || text || 'Unknown Drive error';
    const err = new Error(`Drive API ${method} ${status}: ${String(message).slice(0, 200)}`);
    err.driveStatus = status;
    err.driveReasons = reasons;
    err.driveReason = reasons[0] || '';
    err.isDriveStorageFull = reasons.includes('storageQuotaExceeded') || /storageQuotaExceeded|storage quota/i.test(text || message);
    err.driveRaw = parsed || text;
    return err;
  }

  async function api(method, url, opts = {}) {
    await ensureToken();
    const init = {
      method,
      headers: { Authorization: 'Bearer ' + accessToken, ...(opts.headers || {}) },
    };
    if (opts.body) init.body = opts.body;
    const r = await fetch(url, init);
    if (r.status === 401) {
      // Force re-auth
      accessToken = null; tokenExpiry = 0;
      throw new Error('Unauthorized — please sign in again');
    }
    if (!r.ok) {
      const text = await r.text().catch(() => '');
      throw makeDriveError(method, r.status, text);
    }
    return r;
  }

  // Find or create the "B-Less" folder at user's Drive root.
  // (Older installs created a "Karta" folder — rename it manually if you're
  // migrating, or let the app create a fresh "B-Less" folder and move the
  // backup file/attachments into it.)
  async function ensureFolder(name = 'B-Less', parent = null) {
    const cacheKey = `${parent || 'root'}/${name}`;
    if (parent === null && folderId) return folderId;
    const safeName = name.replace(/'/g, "\\'");
    const parentClause = parent ? `'${parent}' in parents` : `'root' in parents`;
    const q = `name='${safeName}' and mimeType='application/vnd.google-apps.folder' and ${parentClause} and trashed=false`;
    const r = await api('GET', `https://www.googleapis.com/drive/v3/files?q=${encodeURIComponent(q)}&fields=files(id,name)&pageSize=1`);
    const data = await r.json();
    if (data.files && data.files.length > 0) {
      const id = data.files[0].id;
      if (parent === null) folderId = id;
      return id;
    }
    const meta = { name, mimeType: 'application/vnd.google-apps.folder' };
    if (parent) meta.parents = [parent];
    const cr = await api('POST', 'https://www.googleapis.com/drive/v3/files', {
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(meta),
    });
    const folder = await cr.json();
    if (parent === null) folderId = folder.id;
    return folder.id;
  }

  async function findFile(name, parentId) {
    const safe = name.replace(/'/g, "\\'");
    const q = `name='${safe}' and '${parentId}' in parents and trashed=false`;
    const r = await api('GET', `https://www.googleapis.com/drive/v3/files?q=${encodeURIComponent(q)}&fields=files(id,name,modifiedTime,size)&pageSize=1`);
    const data = await r.json();
    return (data.files && data.files[0]) || null;
  }

  // Multipart upload (creates new or updates existing)
  async function uploadBlob(name, blob, parentId, existingId, mimeType) {
    const meta = existingId
      ? { name }
      : { name, parents: [parentId] };
    const boundary = '-------b-less-' + Math.random().toString(36).slice(2);
    const head = `--${boundary}\r\nContent-Type: application/json; charset=UTF-8\r\n\r\n${JSON.stringify(meta)}\r\n--${boundary}\r\nContent-Type: ${mimeType || blob.type || 'application/octet-stream'}\r\n\r\n`;
    const tail = `\r\n--${boundary}--\r\n`;
    const body = new Blob([head, blob, tail], { type: `multipart/related; boundary=${boundary}` });
    const url = existingId
      ? `https://www.googleapis.com/upload/drive/v3/files/${existingId}?uploadType=multipart&fields=id,name,size,modifiedTime`
      : `https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart&fields=id,name,size,modifiedTime`;
    const r = await api(existingId ? 'PATCH' : 'POST', url, {
      headers: { 'Content-Type': `multipart/related; boundary=${boundary}` },
      body,
    });
    return r.json();
  }

  async function downloadText(fileId) {
    const r = await api('GET', `https://www.googleapis.com/drive/v3/files/${fileId}?alt=media`);
    return r.text();
  }

  async function downloadBlob(fileId) {
    const r = await api('GET', `https://www.googleapis.com/drive/v3/files/${fileId}?alt=media`);
    return r.blob();
  }

  async function deleteFile(fileId) {
    await api('DELETE', `https://www.googleapis.com/drive/v3/files/${fileId}`);
  }

  async function listChildren(parentId) {
    const files = [];
    let pageToken = '';
    do {
      const q = `'${parentId}' in parents and trashed=false`;
      const fields = 'nextPageToken,files(id,name,mimeType,size)';
      const tokenPart = pageToken ? `&pageToken=${encodeURIComponent(pageToken)}` : '';
      const r = await api('GET',
        `https://www.googleapis.com/drive/v3/files?q=${encodeURIComponent(q)}&fields=${encodeURIComponent(fields)}&pageSize=1000${tokenPart}`);
      const data = await r.json();
      files.push(...(data.files || []));
      pageToken = data.nextPageToken || '';
    } while (pageToken);
    return files;
  }

  async function folderSize(folder) {
    const children = await listChildren(folder);
    let total = 0;
    for (const f of children) {
      if (f.mimeType === 'application/vnd.google-apps.folder') total += await folderSize(f.id);
      else total += parseInt(f.size || '0', 10) || 0;
    }
    return total;
  }

  async function getStorageSummary() {
    const root = await ensureFolder();
    const [aboutR, blessBytes] = await Promise.all([
      api('GET', 'https://www.googleapis.com/drive/v3/about?fields=storageQuota'),
      folderSize(root),
    ]);
    const about = await aboutR.json();
    const quota = (about && about.storageQuota) || {};
    return {
      blessBytes,
      driveUsedBytes: parseInt(quota.usage || '0', 10) || 0,
      driveLimitBytes: parseInt(quota.limit || '0', 10) || 0,
      driveTrashBytes: parseInt(quota.usageInDriveTrash || '0', 10) || 0,
    };
  }

  // ── Backup ──
  async function saveBackup(jsonStr, filename = 'b-less-backup.json') {
    const fid = await ensureFolder();
    const existing = await findFile(filename, fid);
    const blob = new Blob([jsonStr], { type: 'application/json' });
    return uploadBlob(filename, blob, fid, existing && existing.id, 'application/json');
  }

  async function readBackup(filename = 'b-less-backup.json') {
    const fid = await ensureFolder();
    const f = await findFile(filename, fid);
    if (!f) return null;
    return downloadText(f.id);
  }

  // ── Attachments ──
  async function saveAttachment(entityId, originalName, blob) {
    const root = await ensureFolder();
    const attRoot = await ensureFolder('attachments', root);
    const entityFolder = await ensureFolder(entityId, attRoot);
    // Avoid name collision
    let name = originalName;
    let n = 1;
    while (await findFile(name, entityFolder)) {
      const ext = name.includes('.') ? name.slice(name.lastIndexOf('.')) : '';
      const base = ext ? name.slice(0, -ext.length) : name;
      name = `${base} (${n})${ext}`;
      n++;
    }
    const meta = await uploadBlob(name, blob, entityFolder, null, blob.type);
    return { filename: meta.name, size: parseInt(meta.size || blob.size, 10) };
  }

  async function openAttachment(entityId, filename) {
    const root = await ensureFolder();
    const attRoot = await ensureFolder('attachments', root);
    const entityFolder = await ensureFolder(entityId, attRoot);
    const f = await findFile(filename, entityFolder);
    if (!f) return false;
    // Open in Drive's viewer in a new tab
    window.open(`https://drive.google.com/file/d/${f.id}/view`, '_blank');
    return true;
  }

  async function deleteAttachment(entityId, filename) {
    const root = await ensureFolder();
    const attRoot = await ensureFolder('attachments', root);
    const entityFolder = await ensureFolder(entityId, attRoot);
    const f = await findFile(filename, entityFolder);
    if (!f) return false;
    await deleteFile(f.id);
    return true;
  }

  // ── Photos ──
  async function savePhoto(entityId, originalName, blob) {
    const root         = await ensureFolder();
    const photoRoot    = await ensureFolder('photos', root);
    const entityFolder = await ensureFolder(entityId, photoRoot);
    let name = originalName;
    let n = 1;
    while (await findFile(name, entityFolder)) {
      const ext  = name.includes('.') ? name.slice(name.lastIndexOf('.')) : '';
      const base = ext ? name.slice(0, -ext.length) : name;
      name = `${base} (${n})${ext}`;
      n++;
    }
    const meta = await uploadBlob(name, blob, entityFolder, null, blob.type);
    return { fileId: meta.id, filename: meta.name, size: parseInt(meta.size || blob.size, 10) };
  }

  async function deletePhoto(fileId) {
    await deleteFile(fileId);
  }

  async function downloadPhoto(fileId) {
    const r = await api('GET', `https://www.googleapis.com/drive/v3/files/${fileId}?alt=media`);
    return r.blob();
  }

  // ──────────────────────────────────────────────────────────
  // SHARED SPACES (Phase 1 foundation — API only, no UI yet)
  //
  // Each shared Space is one JSON file in B-Less/spaces/. File metadata
  // carries appProperties.b-less-space='true' so the app can find these
  // among many other files. Drive's permission system handles viewer /
  // editor enforcement: a reader gets a 403 on PATCH, which we surface
  // as "read-only" in the UI. Optimistic concurrency uses headRevisionId
  // from Drive: callers pass the last-known revisionId on push; if Drive
  // has a newer one, we throw a tagged error so the UI can prompt the
  // user to reload.
  // ──────────────────────────────────────────────────────────

  // Stable file-name format. Easy to spot in Drive UI; the file id is
  // what we actually persist & match on.
  function spaceFileName(spaceName) {
    const safe = String(spaceName || 'space').replace(/[\\/:*?"<>|]/g, '').trim() || 'space';
    return `${safe}.bless-space.json`;
  }

  async function ensureSpacesFolder() {
    const root = await ensureFolder();
    return ensureFolder('spaces', root);
  }

  // Build a self-contained payload that includes every entity the Space
  // refers to. Spaces only carry LISTS now — meetings, visits, journal
  // and finance are all global personal features and stay local. Any
  // legacy meeting/visit refs still sitting in space.items from older
  // versions are intentionally skipped here so they stop leaking onto
  // collaborators.
  function buildSpacePayload(space, ownerEmail) {
    const refs = { list: new Set() };
    (space.items || []).forEach(it => {
      if (it.type === 'list') refs.list.add(it.refId);
    });
    const shareableItems = (space.items || []).filter(it => it.type === 'list' && refs.list.has(it.refId));
    // Strip per-device UI state from each robot's tasks. Without this,
    // expanding a task locally would push the expanded flag to Drive
    // and sync onto every collaborator's screen.
    const stripTaskUI = r => {
      const tasks = (r.tasks || []).map(tsk => {
        // Pull off `expanded` (UI only). Keep everything else.
        const { expanded, ...rest } = tsk;
        return rest;
      });
      return Object.assign({}, r, { tasks });
    };
    // The true owner of this space — always use space.ownerEmail so that
    // when a writer pushes, the payload still carries the correct owner.
    const trueOwnerEmail = space.ownerEmail || ownerEmail;

    // Build a safe member list (email + name + picture + role) — NO permissionId.
    // This lets collaborators populate the assignee dropdown with all members.
    // Priority: 1) owner  2) space.collaborators (owner-side, has everyone + roles)
    //           3) space.members (accumulated from previous pushes — preserves
    //              full list even when a writer pushes and has no collaborators)
    //           4) pusher themselves as a fallback
    const safeMembers = [];
    const memberEmails = new Set();

    const addMember = (m) => {
      if (!m || !m.email) return;
      const k = m.email.toLowerCase();
      if (memberEmails.has(k)) return;
      memberEmails.add(k);
      safeMembers.push(m);
    };

    // 1. Owner
    if (trueOwnerEmail) {
      const me = (typeof DriveAPI !== 'undefined' && DriveAPI.getUserInfo) ? DriveAPI.getUserInfo() : null;
      const isOwnerMe = me && me.email && me.email.toLowerCase() === trueOwnerEmail.toLowerCase();
      addMember({
        email:   trueOwnerEmail,
        name:    isOwnerMe ? (me.name || trueOwnerEmail) : (space.ownerName || trueOwnerEmail),
        picture: isOwnerMe ? (me.picture || null)        : (space.ownerPicture || null),
        role:    'owner',
      });
    }
    // 2. Full collaborators list (owner-side only — has everyone with correct roles)
    (space.collaborators || []).forEach(c => {
      if (!c || !c.email) return;
      addMember({ email: c.email, name: c.name || c.email, picture: c.picture || null, role: c.role || 'writer' });
    });
    // 3. Existing space.members from last pull — preserves the full list when a
    //    writer (who has no collaborators array) pushes, so other members aren't dropped.
    (space.members || []).forEach(m => {
      addMember({ email: m.email, name: m.name || m.email, picture: m.picture || null, role: m.role || 'writer' });
    });
    // 4. Pusher themselves — last-resort if somehow not covered above
    if (ownerEmail && !memberEmails.has(ownerEmail.toLowerCase())) {
      const me = (typeof DriveAPI !== 'undefined' && DriveAPI.getUserInfo) ? DriveAPI.getUserInfo() : null;
      addMember({ email: ownerEmail, name: (me && me.name) || ownerEmail, picture: (me && me.picture) || null, role: 'writer' });
    }

    return {
      schema: 'b-less.space.v1',
      ownerEmail: trueOwnerEmail,   // always the real space owner
      space:  { id: space.id, name: space.name, items: shareableItems, members: safeMembers },
      robots: (state.robots || []).filter(r => refs.list.has(r.id)).map(stripTaskUI),
      // Meetings/visits intentionally omitted — they are personal,
      // not space-scoped, and must not propagate through shared files.
      // Shared weekly goal pool: all members' goals for this space.
      spaceGoals: (state.spaceGoals && state.spaceGoals[space.id]) ? state.spaceGoals[space.id] : {},
      updatedAt: Date.now(),
      updatedBy: ownerEmail,  // who pushed this version
    };
  }

  // Owner-side: create the shared file and return { fileId, revisionId, ownerEmail }
  async function createSharedSpaceFile(space) {
    const parent = await ensureSpacesFolder();
    const me     = userInfo && userInfo.email;
    const payload = buildSpacePayload(space, me);
    const boundary = '-------b-less-' + Math.random().toString(36).slice(2);
    const meta = {
      name: spaceFileName(space.name),
      parents: [parent],
      mimeType: 'application/json',
      appProperties: {
        'b-less-space': 'true',
        'b-less-space-id': space.id,
        'b-less-schema': 'v1',
      },
    };
    const head = `--${boundary}\r\nContent-Type: application/json; charset=UTF-8\r\n\r\n${JSON.stringify(meta)}\r\n--${boundary}\r\nContent-Type: application/json\r\n\r\n`;
    const tail = `\r\n--${boundary}--\r\n`;
    const body = new Blob([head, JSON.stringify(payload), tail], { type: `multipart/related; boundary=${boundary}` });
    const r = await api('POST',
      'https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart&fields=id,headRevisionId,modifiedTime,owners(emailAddress,displayName,photoLink)',
      { headers: { 'Content-Type': `multipart/related; boundary=${boundary}` }, body }
    );
    const f = await r.json();
    const o0 = (f.owners && f.owners[0]) || {};
    return {
      fileId: f.id,
      revisionId: f.headRevisionId,
      modifiedTime: f.modifiedTime,
      ownerEmail:   o0.emailAddress || me,
      ownerName:    o0.displayName  || (userInfo && userInfo.name)    || null,
      ownerPicture: o0.photoLink    || (userInfo && userInfo.picture) || null,
    };
  }

  // Fetch latest snapshot + the metadata fields we need to decide whether
  // we can write (owner/writer vs reader) and to detect conflicts.
  async function pullSpaceFile(fileId) {
    const fields = 'id,name,headRevisionId,modifiedTime,ownedByMe,owners(emailAddress,displayName,photoLink),capabilities(canEdit),appProperties';
    const metaR = await api('GET', `https://www.googleapis.com/drive/v3/files/${fileId}?fields=${encodeURIComponent(fields)}`);
    const meta  = await metaR.json();
    const text  = await downloadText(fileId);
    let payload;
    try { payload = JSON.parse(text); } catch { payload = null; }
    const myRole = meta.ownedByMe
      ? 'owner'
      : (meta.capabilities && meta.capabilities.canEdit ? 'writer' : 'reader');
    const mo0 = (meta.owners && meta.owners[0]) || {};
    return {
      fileId: meta.id,
      revisionId: meta.headRevisionId,
      modifiedTime: meta.modifiedTime,
      ownerEmail:   mo0.emailAddress || null,
      ownerName:    mo0.displayName  || null,
      ownerPicture: mo0.photoLink    || null,
      myRole,
      payload,
    };
  }

  // expectedRevisionId is the headRevisionId the caller last saw. If the
  // file has been written since, we throw `{ conflict: true, current }`.
  async function pushSpaceFile(fileId, spaceData, expectedRevisionId) {
    if (expectedRevisionId) {
      const headR = await api('GET',
        `https://www.googleapis.com/drive/v3/files/${fileId}?fields=headRevisionId,modifiedTime`);
      const head = await headR.json();
      if (head.headRevisionId && head.headRevisionId !== expectedRevisionId) {
        const err = new Error('Remote file is newer than local snapshot.');
        err.conflict = true;
        err.current  = { revisionId: head.headRevisionId, modifiedTime: head.modifiedTime };
        throw err;
      }
    }
    const me = userInfo && userInfo.email;
    // Re-pack the full payload (Space + referenced entities) so collaborators
    // always pull a self-contained snapshot.
    const payload = buildSpacePayload(spaceData, me);
    const blob = new Blob([JSON.stringify(payload)], { type: 'application/json' });
    const r = await api('PATCH',
      `https://www.googleapis.com/upload/drive/v3/files/${fileId}?uploadType=media&fields=id,headRevisionId,modifiedTime`,
      { headers: { 'Content-Type': 'application/json' }, body: blob }
    );
    const f = await r.json();
    return { fileId: f.id, revisionId: f.headRevisionId, modifiedTime: f.modifiedTime };
  }

  // List all space files the current user has access to that are tagged
  // with our appProperties marker. Owners see the files they created;
  // collaborators reached via Drive Picker will see those plus any they've
  // opened via Picker (drive.file scope limitation).
  async function listAccessibleSharedSpaces() {
    const q = "appProperties has { key='b-less-space' and value='true' } and trashed=false";
    const fields = 'files(id,name,modifiedTime,ownedByMe,owners(emailAddress,displayName,photoLink),capabilities(canEdit),appProperties)';
    const r = await api('GET',
      `https://www.googleapis.com/drive/v3/files?q=${encodeURIComponent(q)}&fields=${encodeURIComponent(fields)}&pageSize=50`);
    const data = await r.json();
    return (data.files || []).map(f => {
      const o0 = (f.owners && f.owners[0]) || {};
      return {
        fileId: f.id,
        name:   f.name,
        modifiedTime: f.modifiedTime,
        ownerEmail:   o0.emailAddress || null,
        ownerName:    o0.displayName  || null,
        ownerPicture: o0.photoLink    || null,
        myRole: f.ownedByMe ? 'owner' : (f.capabilities && f.capabilities.canEdit ? 'writer' : 'reader'),
        spaceId: (f.appProperties && f.appProperties['b-less-space-id']) || null,
      };
    });
  }

  // Rename the Drive file (owner only — server returns 403 otherwise)
  async function renameSpaceFile(fileId, newSpaceName) {
    const r = await api('PATCH',
      `https://www.googleapis.com/drive/v3/files/${fileId}?fields=id,name`,
      { headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: spaceFileName(newSpaceName) }) });
    return r.json();
  }

  // ── Permissions (collaborators) ──
  async function addCollaborator(fileId, email, role) {
    // role: 'reader' | 'writer'. We never grant 'owner' via this app.
    const r = await api('POST',
      `https://www.googleapis.com/drive/v3/files/${fileId}/permissions?sendNotificationEmail=true&fields=id,emailAddress,role`,
      { headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type: 'user', role, emailAddress: email }) });
    const p = await r.json();
    return { permissionId: p.id, email: p.emailAddress, role: p.role };
  }

  async function listCollaborators(fileId) {
    const r = await api('GET',
      `https://www.googleapis.com/drive/v3/files/${fileId}/permissions?fields=permissions(id,emailAddress,role,type)`);
    const data = await r.json();
    return (data.permissions || [])
      .filter(p => p.type === 'user')
      .map(p => ({ permissionId: p.id, email: p.emailAddress, role: p.role }));
  }

  async function removeCollaborator(fileId, permissionId) {
    await api('DELETE', `https://www.googleapis.com/drive/v3/files/${fileId}/permissions/${permissionId}`);
    return true;
  }

  async function updateCollaboratorRole(fileId, permissionId, newRole) {
    const r = await api('PATCH',
      `https://www.googleapis.com/drive/v3/files/${fileId}/permissions/${permissionId}?fields=id,emailAddress,role`,
      { headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ role: newRole }) });
    const p = await r.json();
    return { permissionId: p.id, email: p.emailAddress, role: p.role };
  }

  // Restore last user info on init (for header chip without re-auth)
  try {
    const cached = localStorage.getItem('b-less-drive-user');
    if (cached) userInfo = JSON.parse(cached);
  } catch {}

  return {
    isLibraryReady, waitForLibrary,
    signIn, signOut, trySilentSignIn,
    isSignedIn:  () => !isExpired(),
    getUserInfo: () => userInfo,
    saveBackup, readBackup,
    saveAttachment, openAttachment, deleteAttachment,
    savePhoto, deletePhoto, downloadPhoto,
    getStorageSummary,
    // Shared spaces (Phase 1: API only)
    createSharedSpaceFile, pullSpaceFile, pushSpaceFile, renameSpaceFile,
    listAccessibleSharedSpaces,
    addCollaborator, listCollaborators, removeCollaborator, updateCollaboratorRole,
  };
})();

// ── BACKUP MANAGER (PWA, Drive API only) ───────────────
const BackupManager = (() => {
  const INTERVAL   = 5 * 60 * 1000;
  const SYNC_KEY   = 'b-less-last-backup-at';
  let intervalId   = null;
  let debounceId   = null;
  // lastBackup is the wall-clock time of the most-recent push we know about
  // (or pull, after we accept Drive's timestamp). Persist it to localStorage
  // so we can compare against the Drive backup on next launch and avoid
  // re-uploading a stale local copy that would clobber another device.
  let lastBackup   = (() => {
    try { const v = localStorage.getItem(SYNC_KEY); return v ? parseInt(v, 10) || null : null; } catch { return null; }
  })();
  let reconnectNeeded = false;
  let reconnectToastShown = false;
  let driveStorageWarning = false;
  let storageSummary = null;
  let storageSummaryAt = 0;
  let storageSummaryLoading = false;
  function setLastBackup(ts) {
    lastBackup = ts;
    try { localStorage.setItem(SYNC_KEY, String(ts)); } catch {}
  }
  let filename     = (() => {
    try { return localStorage.getItem('b-less-backup-filename') || 'b-less-backup.json'; }
    catch { return 'b-less-backup.json'; }
  })();

  const GDRIVE_ICON = '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M7.71 3.5 1.15 15l3.5 6.5L11.21 10z"/><path d="m22.85 15-6.56-11.5h-7l6.57 11.5z"/><path d="M4.65 21.5h13.13l3.5-6.5H8.15z"/></svg>';
  const ARROW = '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>';

  function showReconnectWarning() {
    reconnectNeeded = true;
    const banner = document.getElementById('drive-reconnect-banner');
    if (banner) {
      banner.hidden = false;
      updateSyncSafetyBar();
    }
    if (!reconnectToastShown && typeof showAppToast === 'function') {
      reconnectToastShown = true;
      showAppToast('Google Drive sign-in is required to keep syncing.', 'error');
    }
  }

  function lastSyncText() {
    if (!lastBackup) return t('bp.never');
    const diff = Math.round((Date.now() - lastBackup) / 60000);
    return diff < 1 ? t('bp.just_now') : t('bp.min_ago', { n: diff });
  }

  function storageText() {
    if (storageSummaryLoading && !storageSummary) return t('drive.checking');
    if (!storageSummary) return t('drive.not_checked');
    return formatSize(storageSummary.blessBytes || 0);
  }

  function driveQuotaText() {
    if (storageSummaryLoading && !storageSummary) return t('drive.checking');
    if (!storageSummary) return t('drive.not_checked');
    const used = storageSummary.driveUsedBytes || 0;
    const limit = storageSummary.driveLimitBytes || 0;
    return limit ? `${formatSize(used)} / ${formatSize(limit)}` : formatSize(used);
  }

  async function refreshStorageUsage(force = false) {
    if (!DriveAPI.isSignedIn() || !DriveAPI.getStorageSummary) return null;
    const stale = Date.now() - storageSummaryAt > 60 * 1000;
    if (!force && !stale && storageSummary) return storageSummary;
    if (storageSummaryLoading) return storageSummary;
    storageSummaryLoading = true;
    render();
    try {
      storageSummary = await DriveAPI.getStorageSummary();
      storageSummaryAt = Date.now();
      driveStorageWarning = false;
    } catch (err) {
      if (isDriveStorageQuotaError(err)) driveStorageWarning = true;
      storageSummaryAt = Date.now();
      console.warn('Drive storage summary failed:', err);
    } finally {
      storageSummaryLoading = false;
      render();
    }
    return storageSummary;
  }

  // Inline metadata rendered inside the popover.
  function settingsBlockHtml() {
    const safety = getRestoreSafetySnapshot();
    return `
      <div class="bp-settings-block">
        <div class="bp-theme-toggle theme-toggle" role="group" aria-label="Theme">
          <button class="theme-toggle-btn" data-theme-set="light" type="button">Light</button>
          <button class="theme-toggle-btn" data-theme-set="dim" type="button">Dim</button>
          <button class="theme-toggle-btn" data-theme-set="dark" type="button">Dark</button>
        </div>
        ${safety ? `
          <button class="bp-restore-safety" data-act="restore-safety" type="button">
            Undo last restore (${escapeHtml(new Date(safety.savedAt).toLocaleString())})
          </button>
        ` : ''}
        <div class="bp-version">v${escapeHtml(typeof APP_VERSION !== 'undefined' ? APP_VERSION : '?')}</div>
      </div>
    `;
  }

  function render() {
    const pop         = document.getElementById('bp-content');
    const headerBtn   = document.getElementById('backup-btn');
    const headerLabel = document.getElementById('backup-label');
    if (!pop) return;

    if (DriveAPI.isSignedIn()) {
      reconnectNeeded = false;
      const u = DriveAPI.getUserInfo() || {};
      const lastTxt = lastSyncText();
      const initial = (u.name || u.email || '?').trim().charAt(0).toUpperCase();
      const avatar = u.picture
        ? `<img class="bp-avatar-img" src="${escapeAttr(u.picture)}" alt="" referrerpolicy="no-referrer">`
        : `<span class="bp-avatar-fallback">${initial}</span>`;
      pop.innerHTML = `
        <div class="bp-account">
          <div class="bp-avatar">${avatar}</div>
          <div class="bp-account-info">
            <div class="bp-account-name">Google Drive</div>
            <div class="bp-account-email" title="${escapeAttr(u.email || '')}">${u.email || ''}</div>
          </div>
          <button class="bp-icon-btn bp-signout-btn" data-act="signout" title="${escapeAttr(t('bp.sign_out'))}" aria-label="${escapeAttr(t('bp.sign_out'))}">
            <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><path d="m16 17 5-5-5-5"/><path d="M21 12H9"/></svg>
          </button>
        </div>

        <div class="bp-meta">
          <div class="bp-meta-row">
            <span class="bp-meta-label">${t('bp.filename')}</span>
            <span class="bp-meta-value" title="${escapeAttr(filename)}">${filename}</span>
            <button class="bp-icon-btn" data-act="rename" title="${escapeAttr(t('bp.rename'))}" aria-label="${escapeAttr(t('bp.rename'))}">
              <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4z"/></svg>
            </button>
          </div>
          <div class="bp-meta-row">
            <span class="bp-meta-label">${t('bp.last_sync')}</span>
            <span class="bp-meta-value bp-last-sync">${lastTxt}</span>
          </div>
          <div class="bp-meta-row">
            <span class="bp-meta-label">${t('drive.bless_storage')}</span>
            <span class="bp-meta-value">${storageText()}</span>
          </div>
          <div class="bp-meta-row">
            <span class="bp-meta-label">${t('drive.total_storage')}</span>
            <span class="bp-meta-value">${driveQuotaText()}</span>
          </div>
        </div>

        ${driveStorageWarning ? `<div class="bp-storage-warning">${escapeHtml(driveStorageMessage())}</div>` : ''}

        <div class="bp-actions">
          <button class="btn-ghost" data-act="backup-now">
            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 19V5M5 12l7-7 7 7"/></svg>
            <span>${t('bp.backup_now')}</span>
          </button>
          <button class="btn-ghost" data-act="restore">
            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14M19 12l-7 7-7-7"/></svg>
            <span>${t('bp.restore')}</span>
          </button>
        </div>

        ${settingsBlockHtml()}
      `;
      if (headerBtn && headerLabel) {
        headerBtn.classList.toggle('backup-warn', driveStorageWarning);
        headerBtn.classList.add('backup-ok');
        headerLabel.textContent = driveStorageWarning ? 'Drive full?' : lastTxt;
      }
      const banner = document.getElementById('drive-reconnect-banner');
      if (banner) { banner.hidden = true; updateSyncSafetyBar(); }
      refreshStorageUsage(false);
    } else {
      pop.innerHTML = `
        <div class="bp-intro">
          <div class="bp-intro-icon">${GDRIVE_ICON}</div>
          <div class="bp-intro-title">${t('bp.title')}</div>
          <div class="bp-intro-sub">${t('bp.web_subtitle')}</div>
        </div>
        ${reconnectNeeded ? `<div class="bp-reconnect-warning">Google Drive could not sign in automatically. Sign in again to keep backups and shared Spaces syncing.</div>` : ''}
        <ul class="bp-intro-list">
          <li>Private "B-Less" folder in your Drive</li>
          <li>Auto-syncs as you make changes</li>
          <li>Restore everything on a new device</li>
        </ul>
        <button class="bp-cta-btn" data-act="signin">
          <span class="bp-cta-ico">${GDRIVE_ICON}</span>
          <span>${t('bp.sign_in')}</span>
        </button>
        <div class="bp-hint">${t('bp.web_hint')}</div>

        ${settingsBlockHtml()}
      `;
      if (headerBtn && headerLabel) {
        headerBtn.classList.remove('backup-ok');
        headerBtn.classList.toggle('backup-warn', reconnectNeeded);
        headerLabel.textContent = reconnectNeeded ? 'Sign in' : '';
      }
    }

    pop.querySelectorAll('[data-act]').forEach(el => {
      el.addEventListener('click', async e => {
        e.stopPropagation();
        const act = el.dataset.act;
        if (act === 'signin') {
          try {
            await DriveAPI.signIn();
            reconnectNeeded = false;
            reconnectToastShown = false;
            const restored = await tryRestore();
            if (!restored) await doBackup();
            scheduleInterval();
            render();
            openPopover(); // tryRestore may have closed/reset things; ensure the connected panel is visible
          } catch (e) {
            alertDialog({ title: 'Sign-in failed', message: t('bp.sign_in_failed', { msg: (e && (e.error || e.message)) || 'unknown' }) });
          }
        } else if (act === 'signout') {
          DriveAPI.signOut();
          reconnectNeeded = false;
          reconnectToastShown = false;
          driveStorageWarning = false;
          storageSummary = null;
          storageSummaryAt = 0;
          lastBackup = null;
          try { localStorage.removeItem(SYNC_KEY); } catch {}
          clearInterval(intervalId);
          render();
        } else if (act === 'backup-now') {
          await doBackup();
          render();
        } else if (act === 'restore') {
          const ok = await tryRestore();
          if (!ok) alertDialog({ message: t('bp.no_backup_found') });
        } else if (act === 'restore-safety') {
          const safety = getRestoreSafetySnapshot();
          if (!safety || !safety.data) return;
          const ok = await confirmDialog({
            title: 'Undo restore',
            message: 'Restore the local data snapshot saved right before the last Drive restore?',
            okText: 'Restore local snapshot',
            danger: true,
          });
          if (!ok) return;
          Object.assign(state, safety.data);
          _applyExtras(safety.extras);
          save();
          renderAll();
          render();
        } else if (act === 'rename') {
          const next = await (typeof promptInput === 'function'
            ? promptInput({
                title: t('bp.rename'),
                label: t('bp.rename_prompt'),
                value: filename,
                okText: t('btn.save') || 'Save',
              })
            : Promise.resolve(prompt(t('bp.rename_prompt'), filename)));
          if (!next || !next.trim() || next.trim() === filename) return;
          let cleaned = next.trim().replace(/[\\/:*?"<>|]/g, '');
          if (!/\.json$/i.test(cleaned)) cleaned += '.json';
          filename = cleaned;
          try { localStorage.setItem('b-less-backup-filename', cleaned); } catch {}
          await doBackup();
          render();
        }
      });
    });
    pop.querySelectorAll('[data-theme-set]').forEach(el => {
      el.addEventListener('click', e => {
        e.stopPropagation();
        setTheme(el.dataset.themeSet);
      });
    });
    applyTheme(normalizeTheme(document.documentElement.getAttribute('data-theme')));
  }

  // Snapshot device-local stores that should travel with the backup
  // (the quick-notes scratchpad lives in its own localStorage key but
  // users expect it to follow them across devices).
  function _extras() {
    const out = {};
    try {
      if (typeof QuickNotesStore !== 'undefined' && QuickNotesStore.snapshot) out.quickNotes = QuickNotesStore.snapshot();
    } catch {}
    return out;
  }

  async function doBackup() {
    if (!DriveAPI.isSignedIn()) {
      let hasPriorAuth = false;
      try { hasPriorAuth = !!localStorage.getItem('b-less-drive-user'); } catch {}
      if (hasPriorAuth) {
        showReconnectWarning();
        render();
      }
      return;
    }
    const json = JSON.stringify({
      exportedAt: new Date().toISOString(),
      data: state,
      extras: _extras(),
    }, null, 2);
    try {
      await DriveAPI.saveBackup(json, filename);
      driveStorageWarning = false;
      setLastBackup(Date.now());
      refreshStorageUsage(true);
      render();
    } catch (e) {
      if (isDriveStorageQuotaError(e)) {
        driveStorageWarning = true;
        if (typeof showAppToast === 'function') showAppToast(driveStorageMessage(), 'error');
        render();
      }
      console.warn('Backup failed:', e);
    }
  }

  // Apply device-local stores from a backup payload. Mirrors _extras().
  function _applyExtras(extras) {
    if (!extras || typeof extras !== 'object') return;
    try {
      if (extras.quickNotes != null && typeof QuickNotesStore !== 'undefined' && QuickNotesStore.applyRemote) {
        QuickNotesStore.applyRemote(extras.quickNotes);
        if (typeof renderQuickNotes === 'function') renderQuickNotes();
      }
    } catch (e) { console.warn('Apply extras failed:', e); }
  }

  // Quietly fetch the Drive backup and apply it if it's newer than the most
  // recent push we performed from this device. No prompt — this is the
  // multi-device sync path. Returns true when a restore happened.
  async function pullIfNewer() {
    const backup = await readBackupFromDrive();
    if (!backup || !backup.data) return false;
    const driveTime = new Date(backup.exportedAt).getTime();
    if (!Number.isFinite(driveTime)) return false;
    // Grace window so our own just-pushed backup (timestamp jitter) doesn't
    // immediately bounce back through this path on the same device.
    const GRACE = 5000;
    if (lastBackup && driveTime <= lastBackup + GRACE) return false;
    Object.assign(state, backup.data);
    _applyExtras(backup.extras);
    setLastBackup(driveTime);
    save();
    if (typeof renderAll === 'function') renderAll();
    return true;
  }

  async function readBackupFromDrive() {
    if (!DriveAPI.isSignedIn()) return null;
    try {
      const text = await DriveAPI.readBackup(filename);
      return text ? JSON.parse(text) : null;
    } catch { return null; }
  }

  async function tryRestore() {
    const backup = await readBackupFromDrive();
    if (!backup || !backup.data) return false;
    const hasData = (state.robots || []).length > 0 ||
                    (state.fieldVisits || []).length > 0 ||
                    (state.meetings || []).length > 0;
    const backupDate   = new Date(backup.exportedAt).toLocaleString();
    const projectCount = (backup.data.robots || []).length;
    const msg = hasData
      ? t('bp.restore_overwrite', { date: backupDate, n: projectCount })
      : t('bp.restore_load',      { date: backupDate, n: projectCount });
    const proceed = hasData
      ? await confirmDialog({ title: 'Restore from Drive', message: msg, okText: 'Restore', danger: true })
      : true;
    if (proceed) {
      if (hasData) saveRestoreSafetySnapshot();
      Object.assign(state, backup.data);
      _applyExtras(backup.extras);
      const driveTime = new Date(backup.exportedAt).getTime();
      if (Number.isFinite(driveTime)) setLastBackup(driveTime);
      save();
      renderAll();
      return true;
    }
    return false;
  }

  function scheduleInterval() {
    clearInterval(intervalId);
    intervalId = setInterval(async () => {
      // Pull first so we don't push an outdated local copy that would
      // overwrite changes another device made while we were idle.
      await pullIfNewer().catch(() => {});
      doBackup();
    }, INTERVAL);
  }

  function onDataChange() {
    clearTimeout(debounceId);
    debounceId = setTimeout(doBackup, 2000);
  }

  async function init() {
    // Skip silent sign-in for first-time users. We only know they've granted
    // consent if they previously signed in (then we cached b-less-drive-user).
    // Without this guard the Google Identity Services library still loads its
    // accounts.google.com iframe on every fresh launch, which flashes briefly
    // and looks broken — even though prompt:'none' would have failed anyway.
    let hasPriorAuth = false;
    try { hasPriorAuth = !!localStorage.getItem('b-less-drive-user'); } catch {}
    if (!hasPriorAuth) {
      render();
      return;
    }
    const ok = await DriveAPI.trySilentSignIn().catch(() => false);
    if (ok) {
      // Always check Drive for a newer backup before we start pushing — this
      // is what makes web ↔ mobile two-way sync actually work. Without this,
      // the device that opens last would silently overwrite the other's
      // changes with its stale local snapshot.
      await pullIfNewer().catch(() => {});
      // First-time user with no local data and no Drive watermark? Fall back
      // to the existing prompt-based restore so they don't lose anything by
      // accident.
      const hasData = (state.robots || []).length > 0 ||
                      (state.fieldVisits || []).length > 0 ||
                      (state.meetings || []).length > 0;
      if (!hasData && !lastBackup) await tryRestore();
      scheduleInterval();
      doBackup();
    } else {
      showReconnectWarning();
    }
    render();
  }

  // Triggered by a real user click — keeps OAuth popup permission alive.
  // IMPORTANT: must be invoked synchronously from a user gesture handler (no
  // synthetic .click() forwarding), otherwise mobile browsers block the popup.
  function openPopover() {
    const popover = document.getElementById('backup-popover');
    const backdrop = document.getElementById('backup-backdrop');
    if (popover) popover.classList.add('open');
    if (backdrop) backdrop.classList.add('open');
  }

  async function handleHeaderClick(e) {
    if (e && e.stopPropagation) e.stopPropagation();
    // Always toggle the popover. The popover's content renders the right
    // affordance (intro + Sign in button when not connected, account panel
    // when connected). Going straight to OAuth on first tap was disorienting
    // because no in-app context was shown before the Google popup appeared.
    const popover = document.getElementById('backup-popover');
    const backdrop = document.getElementById('backup-backdrop');
    if (popover) {
      const isOpen = popover.classList.contains('open');
      popover.classList.toggle('open', !isOpen);
      if (backdrop) backdrop.classList.toggle('open', !isOpen);
    }
  }

  function initUI() {
    const btn      = document.getElementById('backup-btn');
    const moreBtn  = document.getElementById('more-drive-trigger');
    const popover  = document.getElementById('backup-popover');
    const backdrop = document.getElementById('backup-backdrop');
    if (!popover) return;
    // The topbar avatar is the primary entry now; btn / moreBtn are
    // legacy ids that may not exist, but outside-click + ESC closing
    // should still wire up regardless.
    const entryControls = [btn, moreBtn].filter(Boolean);
    function closePopover() { popover.classList.remove('open'); if (backdrop) backdrop.classList.remove('open'); }

    // Attach the SAME real handler to both entry points — no synthetic click forwarding,
    // because that loses user-gesture context and mobile browsers block the popup.
    entryControls.forEach(el => el.addEventListener('click', handleHeaderClick));

    // Backdrop click closes
    if (backdrop) backdrop.addEventListener('click', closePopover);

    // Outside click closes
    document.addEventListener('click', e => {
      if (!popover.classList.contains('open')) return;
      if (!popover.contains(e.target) && !entryControls.some(el => e.target === el || el.contains(e.target)))
        closePopover();
    });

    // ESC closes
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && popover.classList.contains('open')) closePopover();
    });

    // Best-effort flush before unload
    window.addEventListener('beforeunload', () => { if (DriveAPI.isSignedIn()) doBackup(); });
    setInterval(render, 30000); // refresh "X min ago"
  }

  return { init, onDataChange, initUI, tryRestore, refresh: render, refreshStorageUsage, handleHeaderClick };
})();
// ── RENDER ALL ─────────────────────────────────────────
function renderAll() {
  if (!state.topics)     state.topics = [];
  if (!state.workHours)  state.workHours = [];
  if (!state.meetings)   state.meetings = [];
  if (state.currentTopicId   === undefined) state.currentTopicId   = null;
  if (state.currentMeetingId === undefined) state.currentMeetingId = null;
  renderRobotList();
  renderRobotDetail();
  renderTopicList();
  renderTopicDetail();
  renderVisits();
  renderWorkHours();
  renderMeetingList();
  renderMeetingDetail();
  if (typeof renderReviews === 'function') renderReviews();
}

function renderWorkHours() {} // removed

// ── ALL TASKS VIEW ─────────────────────────────────────
function renderAllTasks() {
  renderStreakWidget();
  const list = document.getElementById('all-tasks-list');
  if (!list) return;

  // "Only me" filter — remembered per-device. Surfaces only tasks the
  // signed-in user is the assignee for. Hidden entirely when the user
  // isn't signed into Drive (no email to match against).
  const me = (typeof DriveAPI !== 'undefined' && DriveAPI.getUserInfo && DriveAPI.getUserInfo()) || null;
  const myEmail = (me && me.email) ? me.email.toLowerCase() : null;
  const toggle = document.getElementById('at-only-me');
  const toggleLabel = document.getElementById('at-only-me-label');
  if (toggleLabel) toggleLabel.style.display = myEmail ? '' : 'none';
  let onlyMe = false;
  if (toggle && myEmail) {
    try {
      const stored = localStorage.getItem('b-less.at-only-me');
      onlyMe = stored === '1';
    } catch {}
    toggle.checked = onlyMe;
    if (!toggle.dataset.bound) {
      toggle.dataset.bound = '1';
      toggle.addEventListener('change', () => {
        try { localStorage.setItem('b-less.at-only-me', toggle.checked ? '1' : '0'); } catch {}
        renderAllTasks();
      });
    }
  }

  // Collect tasks across all projects/lists
  const filtered = [];
  projectsByMode().forEach(p => {
    (p.tasks || []).forEach(t => {
      if (onlyMe && myEmail) {
        if (!taskAssignedToEmail(t, myEmail)) return;
      }
      filtered.push({ task: t, project: p });
    });
  });

  // Group: active → pending → done
  const order = { active: 0, pending: 1, done: 2 };
  filtered.sort((a, b) => {
    const sa = order[a.task.status] ?? 9;
    const sb = order[b.task.status] ?? 9;
    if (sa !== sb) return sa - sb;
    const pri = { critical: 0, high: 1, normal: 2 };
    return (pri[a.task.priority] ?? 2) - (pri[b.task.priority] ?? 2);
  });

  if (!filtered.length) {
    list.innerHTML = `<div class="empty-visits"><p>${escapeHtml(t('empty.no_tasks_yet'))}</p></div>`;
    return;
  }

  // Group by project
  const byProject = {};
  filtered.forEach(it => {
    const k = it.project.id;
    if (!byProject[k]) byProject[k] = { project: it.project, items: [] };
    byProject[k].items.push(it);
  });

  list.innerHTML = Object.values(byProject).map(g => `
    <div class="at-group">
      <div class="at-group-label">
        <span>${escapeHtml(g.project.name)}</span>
        <span class="count-pill">${g.items.length}</span>
      </div>
      ${g.items.map(it => `
        <div class="at-task ${it.task.status}" data-project-id="${escapeAttr(it.project.id)}" data-task-id="${escapeAttr(it.task.id)}">
          <span class="at-task-dot ${it.task.status}"></span>
          <span class="at-task-title">${escapeHtml(it.task.title)}</span>
          ${(it.task.tags || []).map(tg => `<span class="task-label-chip">${escapeHtml(tg)}</span>`).join('')}
          ${it.task.dueDate ? `<span class="task-due ${dueClass(it.task.dueDate, it.task.status)}">${formatDueShort(it.task.dueDate)}</span>` : ''}
          ${it.task.priority && it.task.priority !== 'normal' ? `<span class="at-task-prio ${escapeAttr(it.task.priority)}">${escapeHtml(it.task.priority)}</span>` : ''}
          <span class="at-task-project">${escapeHtml(g.project.name)}</span>
        </div>
      `).join('')}
    </div>
  `).join('');

  // Click any task → navigate to its source list and expand it
  list.querySelectorAll('.at-task').forEach(el => {
    el.addEventListener('click', () => {
      const pid = el.dataset.projectId;
      const tid = el.dataset.taskId;
      if (!pid || !tid) return;
      let spaceId = null, itemId = null;
      (state.spaces || []).forEach(sp => {
        (sp.items || []).forEach(it => {
          if ((it.type === 'list' || it.type === 'meeting' || it.type === 'visit') && it.refId === pid) {
            spaceId = sp.id; itemId = it.id;
          }
        });
      });
      if (spaceId && itemId && typeof selectSpaceItem === 'function') {
        selectSpaceItem(spaceId, itemId);
      } else {
        state.currentRobotId = pid;
        if (typeof activateSection === 'function') activateSection('robots');
        if (typeof selectRobot === 'function') selectRobot(pid);
      }
      setTimeout(() => {
        const robot = (state.robots||[]).find(r => r.id === pid)
                  || (state.meetings||[]).find(r => r.id === pid)
                  || (state.fieldVisits||[]).find(r => r.id === pid);
        const t = robot && (robot.tasks || []).find(x => x.id === tid);
        if (t) { t.expanded = true; if (typeof renderCurrentDetail === 'function') renderCurrentDetail(); }
        const node = document.getElementById('task-' + tid);
        if (node) { node.scrollIntoView({ block: 'center', behavior: 'smooth' }); node.classList.add('flash-highlight'); setTimeout(() => node.classList.remove('flash-highlight'), 1400); }
      }, 60);
    });
  });
}

// ── CALENDAR ───────────────────────────────────────────
// Compact month grid: each day cell renders the date number plus 1–3 thin
// colored bars indicating event types for that day. Tapping a cell pops
// the existing day panel below for full details. Trades readable inline
// labels for a calendar-app-style overview that fits a phone width.
let calMonth = (() => { const d = new Date(); return { y: d.getFullYear(), m: d.getMonth() }; })();
let calSelected = null; // 'YYYY-MM-DD'
const DOW = ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'];
const MONTH_NAMES = ['January','February','March','April','May','June','July','August','September','October','November','December'];

function ymd(d) {
  const yr = d.getFullYear(), mo = String(d.getMonth()+1).padStart(2,'0'), da = String(d.getDate()).padStart(2,'0');
  return `${yr}-${mo}-${da}`;
}

function renderCalendar() {
  const grid = document.getElementById('cal-grid');
  const title = document.getElementById('cal-title');
  if (!grid || !title) return;
  title.textContent = `${MONTH_NAMES[calMonth.m]} ${calMonth.y}`;

  const first = new Date(calMonth.y, calMonth.m, 1);
  const startDow = (first.getDay() + 6) % 7; // Mon=0
  const daysInMonth = new Date(calMonth.y, calMonth.m + 1, 0).getDate();
  const todayStr = ymd(new Date());

  // Pre-index events by date — calendar is mode-agnostic, show everything
  const eventsByDate = {};
  (state.meetings || []).forEach(m => {
    if (!m.date) return;
    (eventsByDate[m.date] = eventsByDate[m.date] || []).push({ kind: 'meeting', mode: m.mode || 'job', label: m.title, id: m.id });
  });
  (state.fieldVisits || []).forEach(v => {
    if (!v.date) return;
    (eventsByDate[v.date] = eventsByDate[v.date] || []).push({ kind: 'visit', mode: v.mode || 'job', label: v.location || 'Visit', id: v.id });
  });
  (state.robots || []).forEach(r => {
    (r.tasks || []).forEach(task => {
      if (!task.dueDate || task.status === 'done') return;
      (eventsByDate[task.dueDate] = eventsByDate[task.dueDate] || []).push({ kind: 'task', mode: r.mode || 'job', label: task.title, id: task.id, refId: r.id });
    });
  });
  (state.calendarEvents || []).forEach(ev => {
    if (!ev.date) return;
    (eventsByDate[ev.date] = eventsByDate[ev.date] || []).push({ kind: 'event', mode: 'job', label: ev.title || 'Event', id: ev.id });
  });

  let html = DOW.map(d => `<div class="cal-dow">${d}</div>`).join('');

  // Previous month tail
  const prevMonthDays = new Date(calMonth.y, calMonth.m, 0).getDate();
  for (let i = startDow - 1; i >= 0; i--) {
    const dn = prevMonthDays - i;
    const d = new Date(calMonth.y, calMonth.m - 1, dn);
    html += renderCalDay(d, eventsByDate, todayStr, true);
  }
  // Current month
  for (let dn = 1; dn <= daysInMonth; dn++) {
    const d = new Date(calMonth.y, calMonth.m, dn);
    html += renderCalDay(d, eventsByDate, todayStr, false);
  }
  // Trailing blanks (fill to multiple of 7)
  const total = startDow + daysInMonth;
  const trailing = (7 - (total % 7)) % 7;
  for (let i = 1; i <= trailing; i++) {
    const d = new Date(calMonth.y, calMonth.m + 1, i);
    html += renderCalDay(d, eventsByDate, todayStr, true);
  }

  grid.innerHTML = html;

  // Wire clicks
  grid.querySelectorAll('.cal-day').forEach(cell => {
    cell.addEventListener('click', () => {
      calSelected = cell.dataset.date;
      grid.querySelectorAll('.cal-day').forEach(c => c.classList.remove('selected'));
      cell.classList.add('selected');
      renderCalDayPanel();
    });
  });
  // Pills inside cells: jump straight to the entity, don't just select the day
  grid.querySelectorAll('[data-go-meeting]').forEach(pill => {
    pill.addEventListener('click', e => { e.stopPropagation(); goToMeeting(pill.dataset.goMeeting); });
  });
  grid.querySelectorAll('[data-go-visit]').forEach(pill => {
    pill.addEventListener('click', e => { e.stopPropagation(); goToVisit(pill.dataset.goVisit); });
  });

  if (calSelected) renderCalDayPanel();
}

function renderCalDay(d, eventsByDate, todayStr, otherMonth) {
  const dStr = ymd(d);
  const events = eventsByDate[dStr] || [];
  const classes = ['cal-day'];
  if (otherMonth)         classes.push('other-mo');
  if (dStr === todayStr)  classes.push('today');
  if (dStr === calSelected) classes.push('selected');
  // Up to 3 thin colored bars representing the event types present this
  // day. Order: meeting → task → visit → event. Duplicates collapsed.
  const kinds = [];
  const seen = {};
  for (const ev of events) {
    if (seen[ev.kind]) continue;
    seen[ev.kind] = true;
    kinds.push(ev.kind);
    if (kinds.length >= 3) break;
  }
  const barsHtml = kinds.map(k => `<span class="cal-bar ${escapeAttr(k)}"></span>`).join('');
  return `
    <div class="${classes.join(' ')}" data-date="${dStr}">
      <div class="cal-day-num">${d.getDate()}</div>
      <div class="cal-bars">${barsHtml}</div>
    </div>`;
}

window.goToTask = function(projectId, taskId) {
  // Locate the space-item for this list (mirrors All-Tasks click flow)
  let spaceId = null, itemId = null;
  (state.spaces || []).forEach(sp => {
    (sp.items || []).forEach(it => {
      if (it.type === 'list' && it.refId === projectId) { spaceId = sp.id; itemId = it.id; }
    });
  });
  if (projectId !== state.currentRobotId) collapseCurrentListTasks();
  if (spaceId && itemId && typeof selectSpaceItem === 'function') selectSpaceItem(spaceId, itemId);
  else { state.currentRobotId = projectId; activateSection('robots'); renderRobotList(); renderRobotDetail(); }
  const robot = (state.robots || []).find(r => r.id === projectId);
  const task = robot && (robot.tasks || []).find(t => t.id === taskId);
  if (task) { task.expanded = true; renderRobotDetail(); }
};

// ── Calendar event picker ─────────────────────────────
function openCalAddPicker(date) {
  const modal = document.getElementById('modal-cal-add');
  if (!modal) return;
  modal.dataset.date = date;
  modal.classList.add('open');
}
function closeCalAddPicker() {
  document.getElementById('modal-cal-add')?.classList.remove('open');
}
function handleCalAddPick(kind) {
  const modal = document.getElementById('modal-cal-add');
  const date = modal?.dataset.date;
  closeCalAddPicker();
  if (!date) return;
  if (kind === 'task') {
    // Reuse the quick-capture modal pre-filled with this date
    openQuickCapture();
    setTimeout(() => {
      const dueInput = document.getElementById('quick-due-input');
      if (dueInput) dueInput.value = date;
    }, 60);
  } else if (kind === 'meeting') {
    document.getElementById('meeting-title').value     = '';
    document.getElementById('meeting-date').value      = date;
    document.getElementById('meeting-location').value  = '';
    document.getElementById('meeting-attendees').value = '';
    document.getElementById('meeting-robot').value     = '';
    editingMeetingId = null;
    openModal('modal-meeting');
    setTimeout(() => document.getElementById('meeting-title').focus(), 50);
  } else if (kind === 'event') {
    openCalEventModal(date);
  }
}

function openCalEventModal(date) {
  const modal = document.getElementById('modal-cal-event');
  if (!modal) return;
  modal.dataset.date = date;
  document.getElementById('cal-event-title').value = '';
  document.getElementById('cal-event-time').value  = '';
  document.getElementById('cal-event-notes').value = '';
  modal.classList.add('open');
  setTimeout(() => document.getElementById('cal-event-title').focus(), 50);
}
function closeCalEventModal() { document.getElementById('modal-cal-event')?.classList.remove('open'); }
function saveCalEvent() {
  const modal = document.getElementById('modal-cal-event');
  const date = modal?.dataset.date;
  const title = document.getElementById('cal-event-title').value.trim();
  const time  = document.getElementById('cal-event-time').value.trim();
  const notes = document.getElementById('cal-event-notes').value.trim();
  if (!title || !date) { document.getElementById('cal-event-title').focus(); return; }
  if (!state.calendarEvents) state.calendarEvents = [];
  state.calendarEvents.push({ id: uid(), date, title, time: time || null, notes: notes || '', createdAt: Date.now() });
  save();
  closeCalEventModal();
  renderCalendar();
}

(function wireCalAdd() {
  const wire = () => {
    const overlay1 = document.getElementById('modal-cal-add');
    const overlay2 = document.getElementById('modal-cal-event');
    if (overlay1 && !overlay1.dataset.bound) {
      overlay1.dataset.bound = '1';
      overlay1.addEventListener('click', e => { if (e.target === overlay1) closeCalAddPicker(); });
      overlay1.querySelectorAll('[data-close="modal-cal-add"]').forEach(b => b.addEventListener('click', closeCalAddPicker));
      overlay1.querySelectorAll('[data-cal-pick]').forEach(b => b.addEventListener('click', () => handleCalAddPick(b.dataset.calPick)));
    }
    if (overlay2 && !overlay2.dataset.bound) {
      overlay2.dataset.bound = '1';
      overlay2.addEventListener('click', e => { if (e.target === overlay2) closeCalEventModal(); });
      overlay2.querySelectorAll('[data-close="modal-cal-event"]').forEach(b => b.addEventListener('click', closeCalEventModal));
      document.getElementById('cal-event-save')?.addEventListener('click', saveCalEvent);
    }
  };
  wire();
  if (document.readyState !== 'complete') document.addEventListener('DOMContentLoaded', wire);
})();

window.goToMeeting = function(id) {
  state.currentMeetingId = id;
  const tab = document.querySelector('.tab[data-tab="meetings"]');
  if (tab) tab.click();
  if (typeof renderMeetingList === 'function')   renderMeetingList();
  if (typeof renderMeetingDetail === 'function') renderMeetingDetail();
};

window.goToVisit = function(id) {
  const tab = document.querySelector('.tab[data-tab="field-visits"]');
  if (tab) tab.click();
  // renderVisits has run via the tab click; scroll to the card
  setTimeout(() => {
    const el = document.getElementById('visit-' + id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      el.classList.add('flash');
      setTimeout(() => el.classList.remove('flash'), 1400);
    }
  }, 50);
};

function renderCalDayPanel() {
  const panel = document.getElementById('cal-day-panel');
  if (!panel) return;
  if (!calSelected) {
    panel.innerHTML = `<div class="cal-day-empty">${t('empty.select_day')}</div>`;
    return;
  }
  const d = new Date(calSelected + 'T00:00:00');
  const dateStr = `${d.getDate()} ${MONTH_NAMES[d.getMonth()].slice(0,3)} ${d.getFullYear()}`;

  const meetings = (state.meetings || []).filter(m => m.date === calSelected);
  const visits   = (state.fieldVisits || []).filter(v => v.date === calSelected);
  const events   = (state.calendarEvents || []).filter(ev => ev.date === calSelected);
  const tasks    = [];
  (state.robots || []).forEach(r => (r.tasks || []).forEach(task => {
    if (task.dueDate === calSelected && task.status !== 'done') tasks.push({ task, project: r });
  }));
  const notes    = (state.calendarNotes || {})[calSelected] || '';

  panel.innerHTML = `
    <div class="cal-day-header">
      <div class="cal-day-title">${dateStr}</div>
      <button class="btn-ghost cal-add-event-btn" id="cal-add-event-btn" type="button">+ Add</button>
    </div>
    ${tasks.length ? `
      <div>
        <div class="cal-day-section-label">Tasks</div>
        ${tasks.map(it => `<div class="cal-day-item clickable" data-go-task="${escapeAttr(it.project.id)}|${escapeAttr(it.task.id)}"><strong>${escapeHtml(it.task.title)}</strong> · ${escapeHtml(it.project.name)}</div>`).join('')}
      </div>` : ''}
    ${meetings.length ? `
      <div>
        <div class="cal-day-section-label">${t('cal.meetings')}</div>
        ${meetings.map(m => `<div class="cal-day-item clickable" data-go-meeting="${m.id}"><strong>${escapeHtml(m.title)}</strong>${m.location ? ' · ' + escapeHtml(m.location) : ''}</div>`).join('')}
      </div>` : ''}
    ${visits.length ? `
      <div>
        <div class="cal-day-section-label">${t('cal.visits')}</div>
        ${visits.map(v => `<div class="cal-day-item clickable" data-go-visit="${v.id}"><strong>${escapeHtml(v.location)}</strong>${v.robot ? ' · ' + escapeHtml(v.robot) : ''}</div>`).join('')}
      </div>` : ''}
    ${events.length ? `
      <div>
        <div class="cal-day-section-label">Events</div>
        ${events.map(ev => `<div class="cal-day-item cal-event-item">
          <div><strong>${escapeHtml(ev.title)}</strong>${ev.time ? ' · ' + escapeHtml(ev.time) : ''}</div>
          ${ev.notes ? `<div class="cal-event-notes">${escapeHtml(ev.notes)}</div>` : ''}
          <button class="cal-event-del" data-del-event="${escapeAttr(ev.id)}" type="button" aria-label="Delete">×</button>
        </div>`).join('')}
      </div>` : ''}
    <div>
      <div class="cal-day-section-label">${t('cal.notes')}</div>
      <textarea class="cal-notes" id="cal-notes-area" placeholder="${escapeAttr(t('cal.notes_placeholder'))}">${escapeHtml(notes)}</textarea>
    </div>
  `;
  panel.querySelectorAll('[data-go-meeting]').forEach(el => {
    el.addEventListener('click', () => goToMeeting(el.dataset.goMeeting));
  });
  panel.querySelectorAll('[data-go-visit]').forEach(el => {
    el.addEventListener('click', () => goToVisit(el.dataset.goVisit));
  });
  panel.querySelectorAll('[data-go-task]').forEach(el => {
    el.addEventListener('click', () => {
      const [pid, tid] = el.dataset.goTask.split('|');
      goToTask(pid, tid);
    });
  });
  panel.querySelectorAll('[data-del-event]').forEach(el => {
    el.addEventListener('click', async e => {
      e.stopPropagation();
      const id = el.dataset.delEvent;
      if (!(await confirmDialog({ message: 'Delete this event?', danger: true, okText: t('btn.delete') || 'Delete' }))) return;
      state.calendarEvents = (state.calendarEvents || []).filter(ev => ev.id !== id);
      save();
      renderCalendar();
    });
  });
  document.getElementById('cal-add-event-btn')?.addEventListener('click', () => openCalAddPicker(calSelected));

  const ta = document.getElementById('cal-notes-area');
  if (ta) {
    let t;
    ta.addEventListener('input', () => {
      clearTimeout(t);
      t = setTimeout(() => {
        if (!state.calendarNotes) state.calendarNotes = {};
        if (ta.value) state.calendarNotes[calSelected] = ta.value;
        else delete state.calendarNotes[calSelected];
        save();
      }, 500);
    });
  }
}

// Calendar nav
(function initCalendarNav() {
  const prev  = document.getElementById('cal-prev');
  const next  = document.getElementById('cal-next');
  const today = document.getElementById('cal-today');
  if (prev)  prev.addEventListener('click',  () => { calMonth.m--; if (calMonth.m < 0)  { calMonth.m = 11; calMonth.y--; } renderCalendar(); });
  if (next)  next.addEventListener('click',  () => { calMonth.m++; if (calMonth.m > 11) { calMonth.m = 0;  calMonth.y++; } renderCalendar(); });
  if (today) today.addEventListener('click', () => {
    const d = new Date();
    calMonth = { y: d.getFullYear(), m: d.getMonth() };
    calSelected = ymd(d);
    renderCalendar();
  });
})();

// ── THEME ────────────────
const THEME_KEY = 'b-less-theme';
const THEME_USER_SET_KEY = 'b-less-theme-user-set';
const DEFAULT_THEME = 'light';
const THEME_COLORS = { light: '#ffffff', dim: '#1c1f25', dark: '#000000' };
function normalizeTheme(name) {
  return ['light', 'dim', 'dark'].includes(name) ? name : DEFAULT_THEME;
}
function applyTheme(name) {
  const t = normalizeTheme(name);
  document.documentElement.setAttribute('data-theme', t);
  document.querySelectorAll('.theme-toggle-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.themeSet === t);
  });
  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) meta.setAttribute('content', THEME_COLORS[t]);
}
function setTheme(name) {
  const next = normalizeTheme(name);
  try { localStorage.setItem(THEME_KEY, next); } catch {}
  try { localStorage.setItem(THEME_USER_SET_KEY, '1'); } catch {}
  applyTheme(next);
}
(function initTheme() {
  let saved = null;
  let userSet = false;
  try { saved = localStorage.getItem(THEME_KEY); } catch {}
  try { userSet = localStorage.getItem(THEME_USER_SET_KEY) === '1'; } catch {}
  const next = userSet ? normalizeTheme(saved) : DEFAULT_THEME;
  if (saved !== next) {
    try { localStorage.setItem(THEME_KEY, next); } catch {}
  }
  applyTheme(next);
})();

// ── REVIEWS (weekly + monthly summaries) ────────────────
// Two parallel maps: state.reviews.week['2026-W19'], state.reviews.month['2026-05'].
// Notes are plain text; the editor autosaves on input (debounced).

function ensureReviewsState() {
  if (!state.reviews || typeof state.reviews !== 'object') state.reviews = { week: {}, month: {} };
  if (!state.reviews.week)  state.reviews.week  = {};
  if (!state.reviews.month) state.reviews.month = {};
  if (!state.weeklyGoals || typeof state.weeklyGoals !== 'object') state.weeklyGoals = {};
  if (!state.spaceGoals  || typeof state.spaceGoals  !== 'object') state.spaceGoals  = {};
}

function ensureCurrentReviewPeriods({ persist = false } = {}) {
  ensureReviewsState();
  const weekKey = reviewWeekKey();
  const monthKey = reviewMonthKey();
  let changed = false;
  if (!(weekKey in state.reviews.week)) {
    state.reviews.week[weekKey] = '';
    ensureWeekGoal(weekKey);
    changed = true;
  }
  if (!(monthKey in state.reviews.month)) {
    state.reviews.month[monthKey] = '';
    changed = true;
  }
  if (changed && persist) save();
  return changed;
}

function ensureSpaceGoalWeek(spaceId, weekKey) {
  if (!state.spaceGoals) state.spaceGoals = {};
  if (!state.spaceGoals[spaceId] || typeof state.spaceGoals[spaceId] !== 'object') state.spaceGoals[spaceId] = {};
  if (!Array.isArray(state.spaceGoals[spaceId][weekKey])) state.spaceGoals[spaceId][weekKey] = [];
}

// Returns shared spaces (those with .shared = true or those with items)
function getSharedSpaces() {
  return (state.spaces || []).filter(s => s.shared && s.driveFileId);
}

let _reviewSpaceId = null; // which space is selected in the review space-goals panel
let _reviewsPollTimer = null; // periodic sync while Reviews section is active

function startReviewsPoll() {
  if (_reviewsPollTimer) return;
  _reviewsPollTimer = setInterval(() => {
    if (document.getElementById('reviews')?.classList.contains('active')) {
      refreshAllSharedSpaces();
    } else {
      stopReviewsPoll();
    }
  }, 30000);
}
function stopReviewsPoll() {
  if (_reviewsPollTimer) { clearInterval(_reviewsPollTimer); _reviewsPollTimer = null; }
}

window.syncSpaceGoals = function() {
  const btn = document.getElementById('rev-space-sync-btn');
  if (btn) { btn.disabled = true; btn.textContent = '…'; }
  const spaceId = _reviewSpaceId;
  if (!spaceId) { showAppToast('syncSpaceGoals: no spaceId (_reviewSpaceId is null)', 'error'); if (btn) { btn.disabled=false; btn.textContent='↺'; } return; }
  const sp = findSpace(spaceId);
  if (!sp || !sp.driveFileId) { showAppToast('syncSpaceGoals: space not found or no driveFileId', 'error'); if (btn) { btn.disabled=false; btn.textContent='↺'; } return; }
  if (typeof DriveAPI === 'undefined' || !DriveAPI.isSignedIn || !DriveAPI.isSignedIn()) { showAppToast('syncSpaceGoals: Drive not signed in', 'error'); if (btn) { btn.disabled=false; btn.textContent='↺'; } return; }
  (async () => {
    try {
      const r = await DriveAPI.pullSpaceFile(sp.driveFileId);
      if (r && r.payload && r.payload.space) {
        const savedCollabs = sp.collaborators || [];
        mergeImportedSpacePayload(r);
        const updated = findSpace(spaceId);
        if (updated) updated.collaborators = savedCollabs;
        try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); } catch {}
        renderReviews();
        showAppToast('Goals synced ✓');
      } else {
        showAppToast('Sync: no valid space payload from Drive', 'error');
      }
    } catch(e) {
      showAppToast('Sync error: ' + (e && e.message || String(e)), 'error');
    }
    if (btn) { btn.disabled = false; btn.textContent = '↺'; }
  })();
};

// Helper: push space goals to Drive (owner or writer). Writers pull-first
// to avoid overwriting concurrent changes from other collaborators.
function _pushSpaceGoals(spaceId) {
  const sp = findSpace(spaceId);
  if (!sp || !sp.driveFileId) return;
  if (sp.myRole !== 'owner' && sp.myRole !== 'writer') return;
  if (typeof DriveAPI === 'undefined' || !DriveAPI.isSignedIn || !DriveAPI.isSignedIn()) return;
  (async () => {
    try {
      // Always pull → merge → push for every role so no one overwrites
      // another member's goals regardless of who pushes first.
      const pulled = await DriveAPI.pullSpaceFile(sp.driveFileId);
      if (pulled && pulled.payload && pulled.payload.space) {
        const saved = sp.collaborators || [];
        mergeImportedSpacePayload(pulled);
        const updated = findSpace(spaceId);
        if (updated) updated.collaborators = saved;
      }
      const r = await DriveAPI.pushSpaceFile(sp.driveFileId, findSpace(spaceId), null);
      const fresh = findSpace(spaceId);
      if (fresh) { fresh.lastSyncedRevision = r.revisionId; fresh.lastSyncedAt = Date.now(); }
      try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); } catch {}
      renderReviews();
    } catch(e) { /* transient error — next push will retry */ }
  })();
}

window.addSpaceGoal = function() {
  if (!currentReviewKey || reviewPeriod !== 'week') return;
  const spaceId = _reviewSpaceId || (getSharedSpaces()[0] && getSharedSpaces()[0].id);
  if (!spaceId) return;
  const inp = document.getElementById('rev-space-goal-input');
  const title = (inp?.value || '').trim();
  if (!title) return;
  ensureReviewsState();
  ensureSpaceGoalWeek(spaceId, currentReviewKey);
  const me = (typeof DriveAPI !== 'undefined' && DriveAPI.getUserInfo) ? DriveAPI.getUserInfo() : null;
  state.spaceGoals[spaceId][currentReviewKey].push({
    id: uid(),
    title,
    done: false,
    contributors: me ? [{ email: me.email, name: me.name || me.email || null }] : [],
    addedBy:     me?.email    || null,
    addedByName: me?.name     || me?.email || null,
    createdAt:   Date.now(),
    updatedAt:   Date.now(),
  });
  inp.value = '';
  save();
  renderReviews();
  _pushSpaceGoals(spaceId);
};

window.toggleSpaceGoal = function(spaceId, weekKey, goalId) {
  const goals = state.spaceGoals?.[spaceId]?.[weekKey];
  if (!goals) return;
  const goal = goals.find(g => g.id === goalId);
  if (!goal) return;
  goal.done      = !goal.done;
  goal.updatedAt = Date.now();
  save();
  renderReviews();
  _pushSpaceGoals(spaceId);
};

window.removeSpaceGoal = function(spaceId, weekKey, goalId) {
  const goals = state.spaceGoals?.[spaceId]?.[weekKey];
  if (!goals) return;
  const goal = goals.find(g => g.id === goalId);
  if (!goal) return;
  const me = (typeof DriveAPI !== 'undefined' && DriveAPI.getUserInfo) ? DriveAPI.getUserInfo() : null;
  // If multiple contributors exist, only remove the current user's contribution.
  // Soft-delete the whole entry only when the last contributor leaves.
  if (me && goal.contributors && goal.contributors.length > 1) {
    goal.contributors = goal.contributors.filter(
      c => (c.email || '').toLowerCase() !== (me.email || '').toLowerCase()
    );
  } else {
    // Single (or unknown) contributor — soft-delete so Drive merge doesn't resurrect it.
    goal.deleted = true;
  }
  goal.updatedAt = Date.now();
  save();
  renderReviews();
  _pushSpaceGoals(spaceId);
};

window.setReviewSpaceId = function(id) {
  _reviewSpaceId = id;
  renderReviews();
};

function ensureWeekGoal(weekKey) {
  if (!state.weeklyGoals) state.weeklyGoals = {};
  if (!state.weeklyGoals[weekKey] || typeof state.weeklyGoals[weekKey] !== 'object' || Array.isArray(state.weeklyGoals[weekKey])) {
    state.weeklyGoals[weekKey] = { taskIds: [], goals: [] };
  }
  if (!Array.isArray(state.weeklyGoals[weekKey].taskIds)) state.weeklyGoals[weekKey].taskIds = [];
  if (!Array.isArray(state.weeklyGoals[weekKey].goals))   state.weeklyGoals[weekKey].goals   = [];
}

function isTaskWeeklyGoal(taskId) {
  const key = reviewWeekKey();
  return (state.weeklyGoals?.[key]?.taskIds || []).includes(taskId);
}

function getCompletedTasksForWeek(weekKey) {
  const start = reviewKeyToStart(weekKey);
  if (!start) return [];
  const end = new Date(start);
  end.setDate(start.getDate() + 7);
  const results = [];
  for (const robot of (state.robots || [])) {
    for (const task of (robot.tasks || [])) {
      if (task.status === 'done' && task.completedAt) {
        const d = new Date(task.completedAt);
        if (d >= start && d < end) results.push({ task, robotName: robot.name });
      }
    }
  }
  return results;
}

window.toggleTaskWeeklyGoal = function(taskId) {
  ensureReviewsState();
  const key = reviewWeekKey();
  ensureWeekGoal(key);
  const ids = state.weeklyGoals[key].taskIds;
  const idx = ids.indexOf(taskId);
  const adding = idx === -1;
  if (adding) ids.push(taskId);
  else ids.splice(idx, 1);

  // Auto-create this week's review entry so the goal is immediately visible
  // in the Reviews section without the user needing to click "+ Bu hafta" first.
  if (!state.reviews.week[key]) state.reviews.week[key] = '';
  // Also point the review panel at this week so the goal shows up right away.
  if (!currentReviewKey || reviewPeriod !== 'week') {
    reviewPeriod = 'week';
    currentReviewKey = key;
  }

  // Set due date to end of current week when adding to goals (if task has no due date yet).
  // User can always edit the task to move it earlier; carry-over will shift it forward.
  if (adding) {
    const goalRobot = (state.robots || []).find(r => (r.tasks || []).some(t => t.id === taskId));
    const goalTask  = goalRobot && (goalRobot.tasks || []).find(t => t.id === taskId);
    if (goalTask && !goalTask.dueDate) {
      const weekEnd = weekEndDate(key);
      if (weekEnd) { goalTask.dueDate = weekEnd; stampTask(goalTask); }
    }
  }

  // If the task belongs to a shared space, also mirror it in the Space Goals
  // pool so all team members can see it.
  const robot = (state.robots || []).find(r => (r.tasks || []).some(t => t.id === taskId));
  if (robot) {
    const sp = (typeof findSpaceOfRobot === 'function') ? findSpaceOfRobot(robot.id) : null;
    if (sp && sp.shared) {
      ensureSpaceGoalWeek(sp.id, key);
      const spaceGoals = state.spaceGoals[sp.id][key];
      const task = robot.tasks.find(t => t.id === taskId);
      const me = (typeof DriveAPI !== 'undefined' && DriveAPI.getUserInfo) ? DriveAPI.getUserInfo() : null;
      if (adding) {
        // Check if another user already added this task to the space goal pool
        const existing = spaceGoals.find(g => g.taskId === taskId && !g.deleted);
        if (existing) {
          // Entry already exists — just add self as a contributor
          if (!existing.contributors) {
            // Bootstrap contributors array from addedBy field (legacy entry)
            existing.contributors = existing.addedBy
              ? [{ email: existing.addedBy, name: existing.addedByName || null }]
              : [];
          }
          if (me && !existing.contributors.some(c => (c.email || '').toLowerCase() === (me.email || '').toLowerCase())) {
            existing.contributors.push({ email: me.email, name: me.name || me.email || null });
          }
          existing.updatedAt = Date.now();
        } else if (task) {
          // No entry yet — create one with contributors array
          spaceGoals.push({
            id: uid(),
            taskId,
            title: task.title,
            listName: robot.name,
            done: task.status === 'done',
            contributors: me ? [{ email: me.email, name: me.name || me.email || null }] : [],
            addedBy:     me?.email    || null,
            addedByName: me?.name     || me?.email || null,
            createdAt: Date.now(),
            updatedAt: Date.now(),
          });
        }
      } else {
        // Removing — only touch space goals if we can identify the current user.
        // If me is null (Drive not signed in) we can't safely remove just our contribution
        // without risking deletion of another user's goal entry.
        if (me) {
          spaceGoals.forEach(g => {
            if (g.taskId === taskId && !g.deleted) {
              if (g.contributors && g.contributors.length > 0) {
                g.contributors = g.contributors.filter(
                  c => (c.email || '').toLowerCase() !== (me.email || '').toLowerCase()
                );
                if (g.contributors.length === 0) g.deleted = true;
              } else {
                // Legacy entry — only remove if we added it (or creator unknown)
                if (!g.addedBy || g.addedBy.toLowerCase() === me.email.toLowerCase()) {
                  g.deleted = true;
                }
              }
              g.updatedAt = Date.now();
            }
          });
        }
      }
      // Push updated space goals to Drive
      if (typeof _pushSpaceGoals === 'function') _pushSpaceGoals(sp.id);
    }
  }

  save();
  renderCurrentDetail();
  if (typeof renderReviews === 'function') renderReviews();
};

window.addWeeklyGoalText = function() {
  if (!currentReviewKey || reviewPeriod !== 'week') return;
  const inp = document.getElementById('rev-goal-input');
  const title = (inp?.value || '').trim();
  if (!title) return;
  ensureReviewsState();
  ensureWeekGoal(currentReviewKey);
  state.weeklyGoals[currentReviewKey].goals.push({ id: uid(), title, done: false, createdAt: Date.now() });
  inp.value = '';
  save();
  renderReviews();
};

window.toggleWeeklyGoalText = function(weekKey, goalId) {
  const entry = state.weeklyGoals?.[weekKey];
  if (!entry) return;
  const goal = (entry.goals || []).find(g => g.id === goalId);
  if (!goal) return;
  goal.done = !goal.done;
  save();
  renderReviews();
  if (typeof renderHome === 'function') renderHome();
};

window.removeTaskFromWeeklyGoal = function(weekKey, taskId) {
  const entry = state.weeklyGoals?.[weekKey];
  if (!entry) return;
  entry.taskIds = (entry.taskIds || []).filter(id => id !== taskId);
  save();
  renderCurrentDetail();
  renderReviews();
};

window.removeWeeklyGoalText = function(weekKey, goalId) {
  const entry = state.weeklyGoals?.[weekKey];
  if (!entry) return;
  entry.goals = (entry.goals || []).filter(g => g.id !== goalId);
  save();
  renderReviews();
};

// ISO 8601 week number — Monday-based, week 1 contains Jan 4th.
function isoWeek(d) {
  const t = new Date(d);
  t.setHours(0, 0, 0, 0);
  t.setDate(t.getDate() + 3 - ((t.getDay() + 6) % 7));
  const week1 = new Date(t.getFullYear(), 0, 4);
  return {
    year: t.getFullYear(),
    week: 1 + Math.round(((t - week1) / 86400000 - 3 + ((week1.getDay() + 6) % 7)) / 7),
  };
}

function reviewWeekKey(d = new Date())  { const w = isoWeek(d); return `${w.year}-W${String(w.week).padStart(2, '0')}`; }
function reviewMonthKey(d = new Date()) { const x = new Date(d); return `${x.getFullYear()}-${String(x.getMonth() + 1).padStart(2, '0')}`; }

// Returns the Sunday (last day) of the ISO week as a YYYY-MM-DD string.
function weekEndDate(weekKey) {
  const monday = reviewKeyToStart(weekKey);
  if (!monday) return null;
  const sunday = new Date(monday);
  sunday.setDate(monday.getDate() + 6);
  return sunday.toISOString().slice(0, 10);
}

// Returns the ISO week key for the week immediately before the given key.
function prevWeekKey(wk) {
  const [y, w] = wk.split('-W').map(Number);
  if (w > 1) return `${y}-W${String(w - 1).padStart(2, '0')}`;
  // Week 1 → last week of the previous year (Dec 28 is always in the final ISO week).
  const dec28 = new Date(y - 1, 11, 28);
  const last  = isoWeek(dec28);
  return `${last.year}-W${String(last.week).padStart(2, '0')}`;
}

function reviewWeekIndex(weekKey) {
  const start = reviewKeyToStart(weekKey);
  return start ? Math.floor(start.getTime() / 604800000) : -Infinity;
}

function latestPriorWeekKey(currentKey, keys, predicate) {
  const currentIndex = reviewWeekIndex(currentKey);
  return [...new Set(keys)]
    .filter(k => /^\d{4}-W\d{2}$/.test(k) && reviewWeekIndex(k) < currentIndex)
    .filter(k => !predicate || predicate(k))
    .sort((a, b) => reviewWeekIndex(b) - reviewWeekIndex(a))[0] || null;
}

function latestPriorPersonalGoalWeek(currentKey) {
  return latestPriorWeekKey(currentKey, Object.keys(state.weeklyGoals || {}), key => {
    const entry = state.weeklyGoals?.[key];
    if (!entry) return false;
    if ((entry.goals || []).some(g => !g.done)) return true;
    return (entry.taskIds || []).some(taskId => {
      for (const r of (state.robots || [])) {
        const task = (r.tasks || []).find(t => t.id === taskId);
        if (task) return task.status !== 'done';
      }
      return false;
    });
  });
}

function latestPriorSpaceGoalWeek(spaceId, currentKey) {
  return latestPriorWeekKey(currentKey, Object.keys(state.spaceGoals?.[spaceId] || {}), key =>
    (state.spaceGoals?.[spaceId]?.[key] || []).some(g => !g.deleted && !g.done)
  );
}

// Auto carry-over: copy unfinished goals from the previous week into the
// current week. Duplicate checks make this safe to rerun after sync restores
// older weeks or after the current blank week is created automatically.
function autoCarryOverGoals() {
  const currentKey = reviewWeekKey();
  ensureReviewsState();
  ensureWeekGoal(currentKey);
  const current = state.weeklyGoals[currentKey];

  const prevKey = latestPriorPersonalGoalWeek(currentKey) || prevWeekKey(currentKey);

  const prev = state.weeklyGoals?.[prevKey];
  let personalChanged = false;
  let carryFlagChanged = !!prev && current.carriedOverFrom !== prevKey;

  const newWeekEnd  = weekEndDate(currentKey);
  const prevWeekEnd = weekEndDate(prevKey);

  if (prev) {
    // ── Task-linked goals ──────────────────────────────────
    for (const taskId of (prev.taskIds || [])) {
      let task = null;
      for (const r of (state.robots || [])) {
        task = (r.tasks || []).find(t => t.id === taskId);
        if (task) break;
      }
      // Carry over only if the task still exists and isn't done yet
      if (task && task.status !== 'done' && !(current.taskIds || []).includes(taskId)) {
        current.taskIds.push(taskId);
        // Shift due date to end of new week if it was at or before the previous week-end
        // (covers auto-set dates and overdue manual dates).
        if (newWeekEnd && (!task.dueDate || task.dueDate <= prevWeekEnd)) {
          task.dueDate = newWeekEnd;
          stampTask(task);
        }
        personalChanged = true;
      }
    }

    // ── Text goals ─────────────────────────────────────────
    for (const g of (prev.goals || [])) {
      if (!g.done) {
        const already = (current.goals || []).some(cg => (cg.title || '').trim().toLowerCase() === (g.title || '').trim().toLowerCase());
        if (!already) {
          current.goals.push({ id: uid(), title: g.title, done: false, createdAt: Date.now(), carriedOver: true });
          personalChanged = true;
        }
      }
    }

    // Ensure the review entry exists so goals are visible immediately
    if (personalChanged && !state.reviews.week[currentKey]) {
      state.reviews.week[currentKey] = '';
    }
  }

  // ── Space goals ────────────────────────────────────────────
  let spacePushNeeded = [];
  for (const sp of getSharedSpaces()) {
    const spacePrevKey = latestPriorSpaceGoalWeek(sp.id, currentKey) || prevKey;
    const prevGoals = (state.spaceGoals?.[sp.id]?.[spacePrevKey] || [])
      .filter(g => !g.deleted && !g.done);
    if (!prevGoals.length) continue;

    ensureSpaceGoalWeek(sp.id, currentKey);
    const curGoals = state.spaceGoals[sp.id][currentKey];
    let spaceChanged = false;

    for (const g of prevGoals) {
      const exists = curGoals.some(cg =>
        !cg.deleted && (g.taskId ? cg.taskId === g.taskId : cg.title === g.title)
      );
      if (!exists) {
        curGoals.push({
          ...g,
          id: uid(),
          done: false,
          createdAt: Date.now(),
          updatedAt: Date.now(),
          carriedOver: true,
        });
        spaceChanged = true;
      }
    }
    if (spaceChanged) spacePushNeeded.push(sp.id);
  }

  if (prev) current.carriedOverFrom = prevKey;
  if (personalChanged || spacePushNeeded.length || carryFlagChanged) {
    save();
    spacePushNeeded.forEach(id => { if (typeof _pushSpaceGoals === 'function') _pushSpaceGoals(id); });
  }
}

// Convert a key back to a Date pointing to the start of that period
function reviewKeyToStart(key) {
  if (/^\d{4}-W\d{2}$/.test(key)) {
    const [y, w] = key.split('-W').map(Number);
    // ISO week 1: contains Jan 4th. Start = Monday of that week.
    const jan4 = new Date(y, 0, 4);
    const jan4Day = (jan4.getDay() + 6) % 7; // 0 = Mon
    const week1Mon = new Date(y, 0, 4 - jan4Day);
    const start = new Date(week1Mon);
    start.setDate(week1Mon.getDate() + (w - 1) * 7);
    return start;
  }
  if (/^\d{4}-\d{2}$/.test(key)) {
    const [y, m] = key.split('-').map(Number);
    return new Date(y, m - 1, 1);
  }
  return null;
}

function formatReviewLabel(period, key) {
  const start = reviewKeyToStart(key);
  if (!start) return key;
  const months = currentLang === 'tr'
    ? ['Oca', 'Şub', 'Mar', 'Nis', 'May', 'Haz', 'Tem', 'Ağu', 'Eyl', 'Eki', 'Kas', 'Ara']
    : ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  if (period === 'week') {
    const end = new Date(start); end.setDate(start.getDate() + 6);
    const sameMonth = start.getMonth() === end.getMonth();
    const w = key.slice(-2);
    if (sameMonth) {
      return `${t('reviews.week_label') || 'Hafta'} ${w} · ${start.getDate()}–${end.getDate()} ${months[start.getMonth()]}`;
    }
    return `${t('reviews.week_label') || 'Hafta'} ${w} · ${start.getDate()} ${months[start.getMonth()]} – ${end.getDate()} ${months[end.getMonth()]}`;
  }
  // Month
  return `${months[start.getMonth()]} ${start.getFullYear()}`;
}

function reviewWordCount(text) {
  return (text || '').trim().split(/\s+/).filter(Boolean).length;
}

function formatReviewMeta(period, key, text) {
  const words = reviewWordCount(text);
  if (words) return (t('reviews.words') || '{n} words').replace('{n}', words);
  if (period === 'week') {
    const weekData = state.weeklyGoals?.[key] || {};
    const goalCount = (weekData.taskIds || []).length + (weekData.goals || []).length;
    const doneCount = getCompletedTasksForWeek(key).length;
    if (goalCount || doneCount) {
      const parts = [];
      if (goalCount) parts.push(`${goalCount} ${(t('reviews.goals') || 'Goals').toLowerCase()}`);
      if (doneCount) parts.push(`${doneCount} ${(t('reviews.completed') || 'Completed').toLowerCase()}`);
      return parts.join(' · ');
    }
  }
  return t('reviews.empty_entry') || 'Empty';
}

function reviewPreviewText(text) {
  const clean = (text || '').replace(/\s+/g, ' ').trim();
  return clean || (t('reviews.placeholder') || '');
}

function renderReviews() {
  ensureReviewsState();
  ensureCurrentReviewPeriods({ persist: true });
  const listEl   = document.getElementById('reviews-list');
  const taEl     = document.getElementById('rev-textarea');
  const labelEl  = document.getElementById('rev-period-label');
  const delBtn   = document.getElementById('rev-delete-btn');
  const curBtn   = document.getElementById('rev-current-btn');
  const savedLbl = document.getElementById('rev-saved-label');
  if (!listEl || !taEl) return;

  // Reflect period toggle state
  document.querySelectorAll('#reviews-period-toggle [data-rev-period]').forEach(b => {
    b.classList.toggle('active', b.dataset.revPeriod === reviewPeriod);
  });

  // "+ Bu hafta" / "+ Bu ay" button label
  if (curBtn) {
    const span = curBtn.querySelector('span');
    if (span) span.textContent = reviewPeriod === 'week'
      ? (t('reviews.current_week')  || '+ Bu hafta')
      : (t('reviews.current_month') || '+ Bu ay');
  }

  const map = state.reviews[reviewPeriod] || {};
  const keys = Object.keys(map).sort().reverse(); // newest first
  const activePeriodKey = reviewPeriod === 'week' ? reviewWeekKey() : reviewMonthKey();

  // Auto-select the most recent if nothing selected (or selected isn't in this period)
  if (!currentReviewKey || !(currentReviewKey in map)) {
    currentReviewKey = keys[0] || null;
  }

  if (!keys.length) {
    listEl.innerHTML = `<div class="reviews-empty">${escapeHtml(t('reviews.empty') || 'Henüz kayıt yok. Yukarıdaki butonla başlat.')}</div>`;
  } else {
    listEl.innerHTML = keys.map(k => {
      const isActive = k === currentReviewKey;
      const text = map[k] || '';
      const isCurrent = k === activePeriodKey;
      const hasText = !!text.trim();
      return `
        <button class="rev-row ${isActive ? 'active' : ''}${hasText ? ' has-notes' : ' is-empty'}" data-rev-key="${escapeHtml(k)}" type="button">
          <span class="rev-row-top">
            <span class="rev-row-label">${escapeHtml(formatReviewLabel(reviewPeriod, k))}</span>
            ${isCurrent ? `<span class="rev-row-badge">${escapeHtml(t('reviews.current_badge') || 'Current')}</span>` : ''}
          </span>
          <span class="rev-row-preview">${escapeHtml(reviewPreviewText(text))}</span>
          <span class="rev-row-meta">${escapeHtml(formatReviewMeta(reviewPeriod, k, text))}</span>
        </button>`;
    }).join('');
    listEl.querySelectorAll('.rev-row').forEach(b => {
      b.addEventListener('click', () => {
        currentReviewKey = b.dataset.revKey;
        document.getElementById('reviews')?.setAttribute('data-detail-open', 'true');
        renderReviews();
      });
    });
  }

  taEl.placeholder = t('reviews.placeholder') || '';
  if (currentReviewKey) {
    if (labelEl) labelEl.textContent = formatReviewLabel(reviewPeriod, currentReviewKey);
    const nextReviewText = map[currentReviewKey] || '';
    const keepActiveDraft =
      document.activeElement === taEl &&
      taEl.dataset.revPeriod === reviewPeriod &&
      taEl.dataset.revKey === currentReviewKey;
    if (keepActiveDraft) {
      state.reviews[reviewPeriod][currentReviewKey] = taEl.value;
    } else if (taEl.value !== nextReviewText) {
      taEl.value = nextReviewText;
    }
    taEl.dataset.revPeriod = reviewPeriod;
    taEl.dataset.revKey = currentReviewKey;
    taEl.disabled = false;
    if (delBtn) delBtn.style.display = '';
  } else {
    if (labelEl) labelEl.textContent = t('reviews.no_entry') || 'Kayıt yok';
    taEl.value = '';
    delete taEl.dataset.revPeriod;
    delete taEl.dataset.revKey;
    taEl.disabled = true;
    if (delBtn) delBtn.style.display = 'none';
  }
  if (savedLbl) savedLbl.textContent = '';

  // ── Goals section (weekly only) ──────────────────────────
  const goalsEl = document.getElementById('rev-goals-section');
  const completedEl = document.getElementById('rev-completed-section');
  const notesLabelEl = document.getElementById('rev-notes-label');
  // Goals are always tied to the current week — show them even when the user
  // hasn't explicitly opened a review entry yet (currentReviewKey might be null
  // or pointing at a past week). Fall back to the current-week key so task
  // goals added via the "Goal" button are immediately visible.
  const goalsWeekKey = (reviewPeriod === 'week')
    ? (currentReviewKey || reviewWeekKey())
    : null;
  const isWeekPeriod = reviewPeriod === 'week' && currentReviewKey;

  // Auto carry-over: runs at most once per week when the user views the current week.
  if (reviewPeriod === 'week' && goalsWeekKey === reviewWeekKey()) {
    autoCarryOverGoals();
  }

  if (goalsEl) {
    if (goalsWeekKey) {
      const weekData = state.weeklyGoals?.[goalsWeekKey] || {};
      const taskIds = weekData.taskIds || [];
      const textGoals = weekData.goals || [];

      // Resolve task IDs to actual task objects
      const taskGoals = [];
      for (const r of (state.robots || [])) {
        for (const task of (r.tasks || [])) {
          if (taskIds.includes(task.id)) taskGoals.push({ task, robotName: r.name, robotId: r.id });
        }
      }

      const ICO_TARGET = '<svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>';
      const ICO_CLOSE_SM = '<svg viewBox="0 0 24 24" width="10" height="10" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18M6 6l12 12"/></svg>';
      const ICO_CHECK_SM = '<svg viewBox="0 0 24 24" width="10" height="10" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>';

      let html = `<div class="rev-section-header">${ICO_TARGET} ${escapeHtml(t('reviews.goals') || 'Haftalık Hedefler')}</div>`;
      html += '<div class="rev-goals-list">';

      for (const { task, robotName, robotId } of taskGoals) {
        const isDone = task.status === 'done';
        html += `<div class="rev-goal-item rev-goal-item--link${isDone ? ' done' : ''}" onclick="goToTask('${escapeAttr(robotId)}','${escapeAttr(task.id)}')">
          <span class="rev-goal-body">
            <span class="rev-goal-project">${escapeHtml(robotName)}</span>
            <span class="rev-goal-title">${escapeHtml(task.title)}</span>
          </span>
        </div>`;
      }

      for (const g of textGoals) {
        html += `<div class="rev-goal-item${g.done ? ' done' : ''}">
          <button class="rev-goal-check${g.done ? ' checked' : ''}" onclick="toggleWeeklyGoalText('${escapeAttr(goalsWeekKey)}','${g.id}')">${g.done ? ICO_CHECK_SM : ''}</button>
          <span class="rev-goal-body">
            <span class="rev-goal-title">${escapeHtml(g.title)}</span>
          </span>
          <button class="rev-goal-remove" onclick="removeWeeklyGoalText('${escapeAttr(goalsWeekKey)}','${g.id}')" title="Kaldır">${ICO_CLOSE_SM}</button>
        </div>`;
      }

      if (!taskGoals.length && !textGoals.length) {
        html += `<div class="rev-goal-empty">${escapeHtml(t('reviews.no_goals') || 'Henüz hedef eklenmedi.')}</div>`;
      }

      html += '</div>';
      html += `<div class="rev-goal-add">
        <input class="rev-goal-input" id="rev-goal-input" type="text"
          placeholder="${escapeAttr(t('reviews.goals_ph') || 'Hedef ekle…')}"
          onkeydown="if(event.key==='Enter')addWeeklyGoalText()">
        <button class="btn-sm" onclick="addWeeklyGoalText()">${escapeHtml(t('reviews.goals_add') || 'Ekle')}</button>
      </div>`;

      goalsEl.innerHTML = html;
      goalsEl.style.display = '';
    } else {
      goalsEl.innerHTML = '';
      goalsEl.style.display = reviewPeriod === 'week' ? '' : 'none';
    }
  }

  // ── Completed tasks section (weekly only) ─────────────────
  if (completedEl) {
    if (isWeekPeriod) {
      const completed = getCompletedTasksForWeek(currentReviewKey);
      const ICO_CHECK_OK = '<svg viewBox="0 0 24 24" width="11" height="11" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>';
      let html = `<div class="rev-section-header">${ICO_CHECK_OK} ${escapeHtml(t('reviews.completed') || 'Bu hafta tamamlananlar')}</div>`;
      if (completed.length) {
        html += '<div class="rev-completed-list">';
        for (const { task, robotName } of completed) {
          html += `<div class="rev-completed-item">
            <span class="rev-completed-project">${escapeHtml(robotName)}</span>
            <span class="rev-completed-title">${escapeHtml(task.title)}</span>
          </div>`;
        }
        html += '</div>';
      } else {
        html += `<div class="rev-goal-empty">${escapeHtml(t('reviews.no_completed') || 'Bu hafta tamamlanan task yok.')}</div>`;
      }
      completedEl.innerHTML = html;
      completedEl.style.display = '';
    } else {
      completedEl.innerHTML = '';
      completedEl.style.display = 'none';
    }
  }

  if (notesLabelEl) {
    if (isWeekPeriod) {
      notesLabelEl.textContent = t('reviews.notes') || 'Notlar';
      notesLabelEl.style.display = '';
    } else {
      notesLabelEl.style.display = 'none';
    }
  }

  // ── Space Goals pool (weekly, shared spaces only) ─────────
  const spaceGoalsEl = document.getElementById('rev-space-goals-section');
  if (spaceGoalsEl) {
    const sharedSpaces = getSharedSpaces();
    if (isWeekPeriod && sharedSpaces.length > 0) {
      // Init selected space
      if (!_reviewSpaceId || !sharedSpaces.find(s => s.id === _reviewSpaceId)) {
        _reviewSpaceId = sharedSpaces[0].id;
      }
      const sp = findSpace(_reviewSpaceId);
      // Filter out soft-deleted goals (deleted:true) — they stay in state so
      // the deletion can propagate to other members via merge, but aren't shown.
      const goals = (state.spaceGoals?.[_reviewSpaceId]?.[currentReviewKey] || []).filter(g => !g.deleted);

      const ICO_GROUP = '<svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>';
      const ICO_CLOSE_SM = '<svg viewBox="0 0 24 24" width="10" height="10" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18M6 6l12 12"/></svg>';
      const ICO_CHECK_SM = '<svg viewBox="0 0 24 24" width="10" height="10" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>';

      // Header with space selector + sync button
      const ICO_REFRESH = '<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M23 4v6h-6"/><path d="M1 20v-6h6"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/></svg>';
      let html = `<div class="rev-section-header rev-space-header">${ICO_GROUP} ${escapeHtml(t('reviews.space_goals') || 'Space Hedefleri')}`;
      if (sharedSpaces.length > 1) {
        html += `<select class="rev-space-select" onchange="setReviewSpaceId(this.value)">
          ${sharedSpaces.map(s => `<option value="${escapeAttr(s.id)}"${s.id === _reviewSpaceId ? ' selected' : ''}>${escapeHtml(s.name)}</option>`).join('')}
        </select>`;
      } else {
        html += `<span class="rev-space-name-badge">${escapeHtml(sp ? sp.name : '')}</span>`;
      }
      html += `<button id="rev-space-sync-btn" class="rev-space-sync-btn" onclick="syncSpaceGoals()" title="Sync goals from Drive">${ICO_REFRESH}</button>`;
      html += '</div>';

      // Goals list
      html += '<div class="rev-goals-list">';
      if (goals.length) {
        for (const g of goals) {
          const byLabel = (() => {
            if (g.contributors && g.contributors.length > 0) {
              return g.contributors
                .map(c => escapeHtml(c.name || (c.email ? c.email.split('@')[0] : '')))
                .join(', ');
            }
            if (g.addedByName) return escapeHtml(g.addedByName);
            if (g.addedBy)     return escapeHtml(g.addedBy.split('@')[0]);
            return '';
          })();
          // Live-lookup the current task title so renames are reflected immediately.
          // Fall back to the stored snapshot if the task no longer exists.
          // Live-lookup: find robot id for navigation, and current task title.
          let liveRobotId = null;
          let liveTask = null;
          if (g.taskId) {
            for (const r of (state.robots || [])) {
              const t = (r.tasks || []).find(t => t.id === g.taskId);
              if (t) { liveTask = t; liveRobotId = r.id; break; }
            }
          }
          const goalTitle = (liveTask && liveTask.title) || g.title;
          if (liveRobotId) {
            // Task-linked goal — whole row navigates to the task, no buttons
            html += `<div class="rev-goal-item rev-space-goal-item rev-goal-item--link${g.done ? ' done' : ''}" onclick="goToTask('${escapeAttr(liveRobotId)}','${escapeAttr(g.taskId)}')">
              <span class="rev-goal-body">
                ${g.listName ? `<span class="rev-goal-project">${escapeHtml(g.listName)}</span>` : ''}
                <span class="rev-goal-title">${escapeHtml(goalTitle)}</span>
                ${byLabel ? `<span class="rev-space-goal-by">${byLabel}</span>` : ''}
              </span>
            </div>`;
          } else {
            // Text-only space goal (no task link) — keep remove button
            html += `<div class="rev-goal-item rev-space-goal-item${g.done ? ' done' : ''}">
              <button class="rev-goal-check${g.done ? ' checked' : ''}" onclick="toggleSpaceGoal('${escapeAttr(_reviewSpaceId)}','${escapeAttr(currentReviewKey)}','${g.id}')">${g.done ? ICO_CHECK_SM : ''}</button>
              <span class="rev-goal-body">
                ${g.listName ? `<span class="rev-goal-project">${escapeHtml(g.listName)}</span>` : ''}
                <span class="rev-goal-title">${escapeHtml(goalTitle)}</span>
                ${byLabel ? `<span class="rev-space-goal-by">${byLabel}</span>` : ''}
              </span>
              <button class="rev-goal-remove" onclick="removeSpaceGoal('${escapeAttr(_reviewSpaceId)}','${escapeAttr(currentReviewKey)}','${g.id}')" title="Kaldır">${ICO_CLOSE_SM}</button>
            </div>`;
          }
        }
      } else {
        html += `<div class="rev-goal-empty">${escapeHtml(t('reviews.no_space_goals') || 'Henüz space hedefi yok.')}</div>`;
      }
      html += '</div>';

      // Add input
      html += `<div class="rev-goal-add">
        <input class="rev-goal-input" id="rev-space-goal-input" type="text"
          placeholder="${escapeAttr(t('reviews.space_goals_ph') || 'Space hedefi ekle…')}"
          onkeydown="if(event.key==='Enter')addSpaceGoal()">
        <button class="btn-sm" onclick="addSpaceGoal()">${escapeHtml(t('reviews.goals_add') || 'Ekle')}</button>
      </div>`;

      spaceGoalsEl.innerHTML = html;
      spaceGoalsEl.style.display = '';
    } else {
      spaceGoalsEl.innerHTML = '';
      spaceGoalsEl.style.display = 'none';
    }
  }
}

let _revSaveTimer = null;
function scheduleReviewSave() {
  if (!currentReviewKey) return;
  clearTimeout(_revSaveTimer);
  const taEl = document.getElementById('rev-textarea');
  const savedLbl = document.getElementById('rev-saved-label');
  if (savedLbl) savedLbl.textContent = '…';
  _revSaveTimer = setTimeout(() => {
    ensureReviewsState();
    state.reviews[reviewPeriod][currentReviewKey] = taEl.value;
    save();
    if (savedLbl) {
      savedLbl.textContent = t('reviews.saved') || 'Kaydedildi';
      setTimeout(() => { if (savedLbl.textContent === (t('reviews.saved') || 'Kaydedildi')) savedLbl.textContent = ''; }, 1500);
    }
    // Refresh list preview
    const li = document.querySelector(`#reviews-list .rev-row.active .rev-row-preview`);
    if (li) li.textContent = (taEl.value || '').replace(/\s+/g, ' ').slice(0, 60);
  }, 350);
}

scheduleReviewSave = function() {
  if (!currentReviewKey) return;
  clearTimeout(_revSaveTimer);
  const taEl = document.getElementById('rev-textarea');
  const savedLbl = document.getElementById('rev-saved-label');
  const period = reviewPeriod;
  const key = currentReviewKey;
  const value = taEl ? taEl.value : '';
  ensureReviewsState();
  if (!state.reviews[period]) state.reviews[period] = {};
  state.reviews[period][key] = value;
  if (taEl) {
    taEl.dataset.revPeriod = period;
    taEl.dataset.revKey = key;
  }
  if (savedLbl) savedLbl.textContent = '...';
  _revSaveTimer = setTimeout(() => {
    ensureReviewsState();
    if (!state.reviews[period]) state.reviews[period] = {};
    if (taEl && taEl.dataset.revPeriod === period && taEl.dataset.revKey === key) {
      state.reviews[period][key] = taEl.value;
    }
    save();
    if (savedLbl) {
      savedLbl.textContent = t('reviews.saved') || 'Saved';
      setTimeout(() => {
        if (savedLbl.textContent === (t('reviews.saved') || 'Saved')) savedLbl.textContent = '';
      }, 1500);
    }
    const li = document.querySelector('#reviews-list .rev-row.active .rev-row-preview');
    if (li) {
      const latest = (taEl && taEl.dataset.revPeriod === period && taEl.dataset.revKey === key)
        ? taEl.value
        : (state.reviews[period][key] || '');
      li.textContent = latest.replace(/\s+/g, ' ').slice(0, 60);
    }
  }, 350);
};

function startCurrentReviewPeriod() {
  ensureReviewsState();
  const key = reviewPeriod === 'week' ? reviewWeekKey() : reviewMonthKey();
  if (!(key in state.reviews[reviewPeriod])) {
    state.reviews[reviewPeriod][key] = '';
    save();
  }
  currentReviewKey = key;
  document.getElementById('reviews')?.setAttribute('data-detail-open', 'true');
  renderReviews();
  setTimeout(() => document.getElementById('rev-textarea')?.focus(), 60);
}

function openCurrentWeekGoals() {
  ensureReviewsState();
  reviewPeriod = 'week';
  const key = reviewWeekKey();
  if (!(key in state.reviews.week)) {
    state.reviews.week[key] = '';
    save();
  }
  currentReviewKey = key;
  ensureWeekGoal(key);
  activateSection('reviews');
  document.getElementById('reviews')?.setAttribute('data-detail-open', 'true');
  renderReviews();
  refreshAllSharedSpaces();
  startReviewsPoll();
  setTimeout(() => {
    document.getElementById('rev-goals-section')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, 60);
}

function closeReviewsDetail() {
  document.getElementById('reviews')?.removeAttribute('data-detail-open');
}

async function deleteCurrentReview() {
  if (!currentReviewKey) return;
  if (!(await confirmDialog({ message: t('reviews.confirm_delete') || 'Bu özet silinsin mi?', danger: true, okText: t('btn.delete') || 'Delete' }))) return;
  delete state.reviews[reviewPeriod][currentReviewKey];
  save();
  currentReviewKey = null;
  renderReviews();
}

document.querySelectorAll('#reviews-period-toggle [data-rev-period]').forEach(b => {
  b.addEventListener('click', () => {
    reviewPeriod = b.dataset.revPeriod;
    currentReviewKey = null;
    renderReviews();
  });
});
document.getElementById('rev-current-btn')?.addEventListener('click', startCurrentReviewPeriod);
document.getElementById('rev-delete-btn')?.addEventListener('click', deleteCurrentReview);
document.getElementById('rev-textarea')?.addEventListener('input', scheduleReviewSave);


function getMode() { return state.mode || 'job'; }
function applyModeAttr() {
  document.body.setAttribute('data-mode', getMode());
}
// Spaces replaced the legacy Job/Daily mode toggle. These thin wrappers stay
// because cross-space views (All Tasks, Calendar) still call them everywhere.
function projectsByMode() { return state.robots   || []; }
function meetingsByMode() { return state.meetings || []; }

// ── PWA: register service worker ───────────────────────
// We deliberately do NOT auto-reload on SW activation. The earlier auto-reload
// logic raced with BackupManager.init(): on a fresh deploy the page kicked
// off silent Drive re-auth (one accounts.google.com flash), then the SW
// activation handler fired location.reload(), and the freshly-loaded page
// kicked off silent re-auth again (a second flash). The network-first SW
// already serves fresh app.js / index.html / style.css on every cold start,
// so a manual refresh is enough when the user does want the latest behavior.
if ('serviceWorker' in navigator && location.protocol.startsWith('http')) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js').catch(() => {});
  });
}

// ── INIT ───────────────────────────────────────────────
load();
// Language switcher
document.querySelectorAll('.lang-btn').forEach(b => {
  b.addEventListener('click', () => setLang(b.dataset.lang));
  b.classList.toggle('active', b.dataset.lang === currentLang);
});
applyI18n();
applyModeAttr();

// ═════════════════════════════════════════════════════════
//  V4 — Spaces (ClickUp-inspired hierarchy)
//  Sidebar tree of user-defined Spaces. Each space holds typed items
//  (list / meeting / visit / journal) referencing the existing data
//  collections. Mode (Job/Daily) is removed; spaces replace it.
// ═════════════════════════════════════════════════════════

const ITEM_ICONS = {
  list:    '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></svg>',
  meeting: '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
  visit:   '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="m22 2-7 20-4-9-9-4z"/><path d="M22 2 11 13"/></svg>',
};

function escapeHtml(s) {
  return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

// Tiny markdown renderer for notebook entries. Plain-text is escaped first so
// the input is never trusted; we only re-introduce a small whitelist of
// inline tags (bold, italic, code, link). Lists and line breaks come last.
function renderMarkdown(s) {
  if (!s) return '';
  let h = escapeHtml(s);
  // Inline code first so its contents don't get re-processed
  h = h.replace(/`([^`\n]+)`/g, (_, t) => `<code>${t}</code>`);
  // Bold then italic — bold tested first to avoid stealing italic stars
  h = h.replace(/\*\*([^*\n]+)\*\*/g, '<strong>$1</strong>');
  h = h.replace(/(^|[\s(_~])\*([^*\n]+)\*(?=[\s),.!?_~]|$)/g, '$1<em>$2</em>');
  // Bare URLs
  h = h.replace(/\bhttps?:\/\/[^\s<]+/g, m => `<a href="${m}" target="_blank" rel="noopener noreferrer">${m}</a>`);
  // Tables, checklists and bullet list lines. Input is already escaped;
  // these transforms only re-introduce structural markup.
  const lines = h.split('\n');
  const buf = [];
  let inList = false;
  const closeList = () => {
    if (inList) { buf.push('</ul>'); inList = false; }
  };
  const isTableSep = line => /^\s*\|?\s*:?-{3,}:?\s*(\|\s*:?-{3,}:?\s*)+\|?\s*$/.test(line);
  const tableCells = line => line.trim().replace(/^\|/, '').replace(/\|$/, '').split('|').map(c => c.trim());
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (line.includes('|') && lines[i + 1] && isTableSep(lines[i + 1])) {
      closeList();
      const headers = tableCells(line);
      const rows = [];
      i += 2;
      while (i < lines.length && lines[i].includes('|') && lines[i].trim()) {
        rows.push(tableCells(lines[i]));
        i++;
      }
      i--;
      buf.push(`<div class="md-table-wrap"><table class="md-table"><thead><tr>${headers.map(c => `<th>${c}</th>`).join('')}</tr></thead><tbody>${rows.map(row => `<tr>${headers.map((_, idx) => `<td>${row[idx] || ''}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`);
      continue;
    }
    const m = line.match(/^\s*[-*]\s+(\[[ xX]\]\s+)?(.*)$/);
    if (m) {
      if (!inList) { buf.push('<ul class="md-list">'); inList = true; }
      if (m[1]) {
        const checked = /x/i.test(m[1]);
        buf.push(`<li class="md-check${checked ? ' checked' : ''}"><span class="md-check-box">${checked ? '✓' : ''}</span><span>${m[2]}</span></li>`);
      } else {
        buf.push(`<li>${m[2]}</li>`);
      }
    } else {
      closeList();
      buf.push(line);
    }
  }
  closeList();
  h = buf.join('\n').replace(/\n/g, '<br>');
  // Collapse <br> immediately after </ul> to keep spacing tight
  h = h.replace(/<\/ul><br>/g, '</ul>').replace(/<\/div><br>/g, '</div>');
  return h;
}

function noteToolbarHtml(targetId) {
  const id = escapeAttr(targetId);
  const labels = {
    bullet: 'List',
    check: 'Checklist',
  };
  return `<div class="note-tools" data-note-tools-for="${id}">
    <button type="button" class="note-tool-btn" onclick="insertNoteSnippet('${id}','bullet')">${labels.bullet}</button>
    <button type="button" class="note-tool-btn" onclick="insertNoteSnippet('${id}','check')">${labels.check}</button>
  </div>`;
}

window.insertNoteSnippet = function(targetId, type) {
  const area = document.getElementById(targetId);
  if (!area) return;
  const snippets = {
    bullet: '- ',
    check: '- [ ] ',
  };
  const snippet = snippets[type] || snippets.bullet;
  const start = area.selectionStart ?? area.value.length;
  const end = area.selectionEnd ?? start;
  const before = area.value.slice(0, start);
  const selected = area.value.slice(start, end);
  const after = area.value.slice(end);
  if ((type === 'bullet' || type === 'check') && selected.trim()) {
    const marker = type === 'check' ? '- [ ] ' : '- ';
    const transformed = selected
      .split('\n')
      .map(line => line.trim() ? line.replace(/^\s*(?:[-*]\s+(?:\[[ xX]\]\s+)?)?/, marker) : line)
      .join('\n');
    area.value = before + transformed + after;
    const pos = before.length + transformed.length;
    area.focus();
    area.setSelectionRange(pos, pos);
    area.dispatchEvent(new Event('input', { bubbles: true }));
    return;
  }
  const needsBreak = before && !before.endsWith('\n') ? '\n' : '';
  const insert = needsBreak + snippet;
  area.value = before + insert + after;
  const pos = before.length + insert.length;
  area.focus();
  area.setSelectionRange(pos, pos);
  area.dispatchEvent(new Event('input', { bubbles: true }));
};

function handleNoteListKeydown(e) {
  const area = e.target;
  if (!area || area.tagName !== 'TEXTAREA' || e.key !== 'Enter' || e.shiftKey || e.altKey || e.ctrlKey || e.metaKey) return;
  if (area.selectionStart !== area.selectionEnd) return;
  const value = area.value || '';
  const start = area.selectionStart ?? value.length;
  const lineStart = value.lastIndexOf('\n', Math.max(0, start - 1)) + 1;
  const line = value.slice(lineStart, start);
  const m = line.match(/^(\s*[-*]\s+(?:\[[ xX]\]\s+)?)(.*)$/);
  if (!m) return;
  e.preventDefault();
  const marker = m[1];
  const body = m[2] || '';
  const beforeLine = value.slice(0, lineStart);
  const afterCursor = value.slice(start);
  if (!body.trim()) {
    area.value = beforeLine + afterCursor.replace(/^\n?/, '');
    const pos = beforeLine.length;
    area.setSelectionRange(pos, pos);
  } else {
    const insert = '\n' + marker;
    area.value = value.slice(0, start) + insert + afterCursor;
    const pos = start + insert.length;
    area.setSelectionRange(pos, pos);
  }
  area.dispatchEvent(new Event('input', { bubbles: true }));
  if (typeof autoSizeTextarea === 'function') autoSizeTextarea(area);
}

document.addEventListener('keydown', handleNoteListKeydown);

const NOTE_TOOL_ICONS = {
  bullet: '<svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M8 6h13M8 12h13M8 18h13"/><circle cx="3.5" cy="6" r="1"/><circle cx="3.5" cy="12" r="1"/><circle cx="3.5" cy="18" r="1"/></svg>',
  check: '<svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>',
};

function noteListMarker(type) {
  return type === 'check' ? '- [ ] ' : '- ';
}

function applyNoteListMarker(line, marker) {
  if (!line.trim()) return marker;
  const indent = (line.match(/^\s*/) || [''])[0];
  const content = line.replace(/^\s*(?:[-*]\s+(?:\[[ xX]\]\s+)?)?/, '');
  return indent + marker + content;
}

function noteToolbarHtml(targetId) {
  const id = escapeAttr(targetId);
  return `<div class="note-tools" data-note-tools-for="${id}">
    <button type="button" class="note-tool-btn" onclick="insertNoteSnippet('${id}','bullet')" title="Start list" aria-label="Start list">${NOTE_TOOL_ICONS.bullet}<span>List</span></button>
    <button type="button" class="note-tool-btn" onclick="insertNoteSnippet('${id}','check')" title="Start checklist" aria-label="Start checklist">${NOTE_TOOL_ICONS.check}<span>Checklist</span></button>
  </div>`;
}

function refreshNoteToolbars(root = document) {
  root.querySelectorAll('[data-note-tools-for]').forEach(toolbar => {
    const id = toolbar.dataset.noteToolsFor;
    if (!id) return;
    toolbar.innerHTML = `
      <button type="button" class="note-tool-btn" onclick="insertNoteSnippet('${escapeAttr(id)}','bullet')" title="Start list" aria-label="Start list">${NOTE_TOOL_ICONS.bullet}<span>List</span></button>
      <button type="button" class="note-tool-btn" onclick="insertNoteSnippet('${escapeAttr(id)}','check')" title="Start checklist" aria-label="Start checklist">${NOTE_TOOL_ICONS.check}<span>Checklist</span></button>
    `;
  });
}

window.insertNoteSnippet = function(targetId, type) {
  const area = document.getElementById(targetId);
  if (!area) return;
  const marker = noteListMarker(type);
  const start = area.selectionStart ?? area.value.length;
  const end = area.selectionEnd ?? start;
  const selected = area.value.slice(start, end);
  if (selected.trim()) {
    const before = area.value.slice(0, start);
    const after = area.value.slice(end);
    const transformed = selected
      .split('\n')
      .map(line => line.trim() ? applyNoteListMarker(line, marker) : line)
      .join('\n');
    area.value = before + transformed + after;
    const pos = before.length + transformed.length;
    area.focus();
    area.setSelectionRange(pos, pos);
    area.dispatchEvent(new Event('input', { bubbles: true }));
    return;
  }

  const value = area.value || '';
  const lineStart = value.lastIndexOf('\n', Math.max(0, start - 1)) + 1;
  const lineEndRaw = value.indexOf('\n', start);
  const lineEnd = lineEndRaw === -1 ? value.length : lineEndRaw;
  const line = value.slice(lineStart, lineEnd);
  const transformed = applyNoteListMarker(line, marker);
  area.value = value.slice(0, lineStart) + transformed + value.slice(lineEnd);
  const pos = lineStart + transformed.length;
  area.focus();
  area.setSelectionRange(pos, pos);
  area.dispatchEvent(new Event('input', { bubbles: true }));
};

document.removeEventListener('keydown', handleNoteListKeydown);
handleNoteListKeydown = function(e) {
  const area = e.target;
  if (!area || area.tagName !== 'TEXTAREA' || e.altKey || e.ctrlKey || e.metaKey) return;
  if (area.selectionStart !== area.selectionEnd) return;
  const value = area.value || '';
  const start = area.selectionStart ?? value.length;
  const lineStart = value.lastIndexOf('\n', Math.max(0, start - 1)) + 1;
  const line = value.slice(lineStart, start);
  const m = line.match(/^(\s*)([-*]\s+(?:\[[ xX]\]\s+)?)(.*)$/);
  if (!m) return;
  const indent = m[1];
  const marker = m[2];
  const body = m[3] || '';

  if (e.key === 'Tab') {
    e.preventDefault();
    const beforeLine = value.slice(0, lineStart);
    const afterCursor = value.slice(start);
    if (e.shiftKey) {
      const nextIndent = indent.replace(/ {1,2}$/, '');
      area.value = beforeLine + nextIndent + marker + body + afterCursor;
      const pos = beforeLine.length + nextIndent.length + marker.length + body.length;
      area.setSelectionRange(pos, pos);
    } else {
      area.value = beforeLine + '  ' + line + afterCursor;
      const pos = start + 2;
      area.setSelectionRange(pos, pos);
    }
    area.dispatchEvent(new Event('input', { bubbles: true }));
    return;
  }

  if (e.key === 'Backspace' && !body && start === lineStart + indent.length + marker.length) {
    e.preventDefault();
    const beforeLine = value.slice(0, lineStart);
    const afterCursor = value.slice(start);
    area.value = beforeLine + afterCursor;
    const pos = beforeLine.length;
    area.setSelectionRange(pos, pos);
    area.dispatchEvent(new Event('input', { bubbles: true }));
    return;
  }

  if (e.key !== 'Enter' || e.shiftKey) return;
  e.preventDefault();
  const beforeLine = value.slice(0, lineStart);
  const afterCursor = value.slice(start);
  if (!body.trim()) {
    area.value = beforeLine + afterCursor.replace(/^\n?/, '');
    const pos = beforeLine.length;
    area.setSelectionRange(pos, pos);
  } else {
    const insert = '\n' + indent + marker;
    area.value = value.slice(0, start) + insert + afterCursor;
    const pos = start + insert.length;
    area.setSelectionRange(pos, pos);
  }
  area.dispatchEvent(new Event('input', { bubbles: true }));
  if (typeof autoSizeTextarea === 'function') autoSizeTextarea(area);
};
document.addEventListener('keydown', handleNoteListKeydown);
refreshNoteToolbars();

function enhanceNoteTextareas(root = document) {
  const selector = [
    '.reviews-textarea',
    '.cal-notes',
    '.brainstorm-area',
    '#visit-notes',
    '#cal-event-notes',
  ].join(',');
  root.querySelectorAll(selector).forEach(area => {
    if (!area.id || area.dataset.noteTools === '1') return;
    if ([...document.querySelectorAll('[data-note-tools-for]')].some(el => el.dataset.noteToolsFor === area.id)) {
      area.dataset.noteTools = '1';
      return;
    }
    area.dataset.noteTools = '1';
    area.insertAdjacentHTML('beforebegin', noteToolbarHtml(area.id));
  });
}

function escapeJsArg(s) {
  return String(s)
    .replace(/\\/g, '\\\\')
    .replace(/'/g, "\\'")
    .replace(/\r/g, '\\r')
    .replace(/\n/g, '\\n')
    .replace(/</g, '\\x3C')
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;');
}

// ── First-run seed: sample data so a new user has something to explore ──
function seedSampleData() {
  // Skip if user has already seen the welcome (they may have deleted samples on purpose)
  if (state.onboarded) return false;
  // Only seed when truly empty (no robots/meetings/visits anywhere). This also
  // catches users who briefly visited before seeding existed: state.spaces will
  // already have Work/Personal but the actual data collections are still empty.
  const empty = (!state.robots      || state.robots.length === 0)
             && (!state.meetings    || state.meetings.length === 0)
             && (!state.fieldVisits || state.fieldVisits.length === 0);
  if (!empty) return false;

  const work = (state.spaces || []).find(s => s.name === 'Work') || (state.spaces && state.spaces[0]);
  if (!work) return false;

  const today = new Date();
  const todayIso = today.toISOString().slice(0, 10);
  const inThreeDays = new Date(today.getTime() + 3 * 86400000).toISOString().slice(0, 10);
  const sampleListName = 'Welcome to B-Less';

  const sampleList = {
    id: uid(),
    name: sampleListName,
    description: 'A sample list to help you explore. Delete it whenever you want.',
    category: 'Getting Started',
    mode: 'job',
    tasks: [
      { id: uid(), title: 'Tap me, then mark Done', priority: 'normal',   status: 'active',  dueDate: todayIso,    tags: ['demo'],  notebook: [], expanded: false, createdAt: Date.now() },
      { id: uid(), title: 'Open me and add a subtask or a note', priority: 'high', status: 'active', dueDate: inThreeDays, tags: ['demo'], notebook: [], expanded: false, createdAt: Date.now() },
      { id: uid(), title: 'Create your own list with the + button', priority: 'normal', status: 'pending', dueDate: null, tags: [], notebook: [], expanded: false, createdAt: Date.now() },
    ],
    issues: [],
    createdAt: Date.now(),
  };
  state.robots = state.robots || [];
  state.robots.push(sampleList);
  work.items.push({ id: uid(), type: 'list', refId: sampleList.id });

  const sampleVisit = {
    id: uid(),
    location: 'Sample customer site',
    date: inThreeDays,
    robot: sampleListName,
    notes: 'Plan a visit, log who you meet and what to follow up on.',
    mode: 'job',
    createdAt: Date.now(),
  };
  state.fieldVisits = state.fieldVisits || [];
  state.fieldVisits.push(sampleVisit);
  work.items.push({ id: uid(), type: 'visit', refId: sampleVisit.id });

  const sampleMeeting = {
    id: uid(),
    title: 'Welcome meeting',
    date: todayIso,
    location: 'Office',
    attendees: 'You',
    robot: sampleListName,
    notes: 'Use this area to capture decisions and discussion. Action items below.',
    actions: [
      { id: uid(), text: 'Explore the spaces in the sidebar', done: false, createdAt: Date.now() },
      { id: uid(), text: 'Try the language toggle in Settings', done: false, createdAt: Date.now() },
    ],
    mode: 'job',
    createdAt: Date.now(),
  };
  state.meetings = state.meetings || [];
  state.meetings.push(sampleMeeting);
  work.items.push({ id: uid(), type: 'meeting', refId: sampleMeeting.id });

  save();
  return true;
}

// ── Owner gate: extra UI surfaces (calculators, tools) only show for the owner ──
// This is a *visibility* gate, not a security boundary — anyone with devtools
// could flip the flag. The data shown is non-sensitive, just personal/clutter
// hiding for other users who happen to sign in.
// ── Easter egg: greet a specific Drive account with hearts ──
const BELOVED_EMAIL = 'irem.arayan@gmail.com';
const IREM_FLAG_KEY = 'b-less-irem-celebrated';
window.celebrateIfBeloved = function(email) {
  if (!email || email.toLowerCase() !== BELOVED_EMAIL) return;
  // Throttle to once per session: covers SW-triggered reloads and any silent
  // re-auth bursts that fire fetchUserInfo more than once back-to-back.
  let already = false;
  try { already = sessionStorage.getItem(IREM_FLAG_KEY) === '1'; } catch {}
  if (already || window.__bLessIremCelebrated) return;
  window.__bLessIremCelebrated = true;
  try { sessionStorage.setItem(IREM_FLAG_KEY, '1'); } catch {}
  showIremWelcome();
};

function showIremWelcome() {
  if (document.getElementById('irem-welcome')) return;

  const overlay = document.createElement('div');
  overlay.id = 'irem-welcome';
  overlay.className = 'irem-welcome-overlay';

  const heartsLayer = document.createElement('div');
  heartsLayer.className = 'irem-hearts';
  const HEARTS = ['💖','💗','💓','💕','💞','❤️','💝','🌸','💘'];
  const HEART_COUNT = 36;
  for (let i = 0; i < HEART_COUNT; i++) {
    const h = document.createElement('span');
    h.className = 'irem-heart';
    h.textContent = HEARTS[Math.floor(Math.random() * HEARTS.length)];
    h.style.left = Math.random() * 100 + 'vw';
    h.style.fontSize = (18 + Math.random() * 36) + 'px';
    h.style.animationDuration = (4 + Math.random() * 4) + 's';
    h.style.animationDelay = (Math.random() * 2) + 's';
    heartsLayer.appendChild(h);
  }

  const card = document.createElement('div');
  card.className = 'irem-welcome-card';
  card.innerHTML = `
    <div class="irem-welcome-emoji">💖🐟💖</div>
    <div class="irem-welcome-title">hoşgeldin balıkımmmmmmmmm</div>
    <div class="irem-welcome-sub">seni çok seviyorum 💕</div>
    <button class="irem-welcome-close" type="button">teşekkürler 💗</button>
  `;

  overlay.appendChild(heartsLayer);
  overlay.appendChild(card);
  document.body.appendChild(overlay);

  const dismiss = () => {
    overlay.classList.add('closing');
    setTimeout(() => overlay.remove(), 350);
  };
  card.querySelector('.irem-welcome-close').addEventListener('click', dismiss);
  overlay.addEventListener('click', e => { if (e.target === overlay) dismiss(); });
  // Auto-dismiss after a comfortable read
  setTimeout(dismiss, 8000);
}

// ── Quick-capture FAB ──────────────────────────────────
const QUICK_LAST_LIST_KEY = 'b-less-quick-last-list';

function openQuickCapture() {
  const modal  = document.getElementById('modal-quick');
  const input  = document.getElementById('quick-input');
  const select = document.getElementById('quick-list-select');
  const dueInput = document.getElementById('quick-due-input');
  if (!modal || !input || !select) return;

  populateQuickListSelect();

  if (dueInput) dueInput.value = new Date().toISOString().slice(0, 10);
  input.value = '';
  modal.classList.add('open');
  setTimeout(() => input.focus(), 50);
}

function populateQuickListSelect() {
  const select = document.getElementById('quick-list-select');
  if (!select) return;
  const lists = (state.robots || []).slice().sort((a, b) => (a.name || '').localeCompare(b.name || ''));
  let lastUsed = null;
  try { lastUsed = localStorage.getItem(QUICK_LAST_LIST_KEY); } catch {}
  const preferred = state.currentRobotId || lastUsed || (lists[0] && lists[0].id);
  if (!lists.length) {
    select.innerHTML = '<option value="">(no lists yet — create one)</option>';
  } else {
    select.innerHTML = lists.map(r => `<option value="${escapeAttr(r.id)}" ${r.id === preferred ? 'selected' : ''}>${escapeHtml(r.name)}</option>`).join('');
  }
}

async function quickCreateList() {
  const raw = await promptInput({
    title: 'New list',
    label: 'List name',
    placeholder: 'e.g. Groceries, Project tasks',
    okText: 'Create',
  });
  const name = (raw || '').trim();
  if (!name) return;
  // Pick a target space: use current, or fall back to first
  const targetSpace = (state.spaces || []).find(s => s.id === state.currentSpaceId) || (state.spaces || [])[0];
  if (!targetSpace) return;
  const robot = { id: uid(), name, description: '', category: '', mode: 'job', tasks: [], issues: [], createdAt: Date.now() };
  state.robots.push(robot);
  targetSpace.items.push({ id: uid(), type: 'list', refId: robot.id });
  save();
  populateQuickListSelect();
  const select = document.getElementById('quick-list-select');
  if (select) select.value = robot.id;
  // Sidebar/list views need to pick up the new list
  if (typeof renderSidebar === 'function') renderSidebar();
  if (typeof renderRobotList === 'function') renderRobotList();
}

function setQuickDateShortcut(kind) {
  const dueInput = document.getElementById('quick-due-input');
  if (!dueInput) return;
  if (kind === 'clear') { dueInput.value = ''; return; }
  const d = new Date();
  if (kind === 'tomorrow') d.setDate(d.getDate() + 1);
  dueInput.value = d.toISOString().slice(0, 10);
}

function closeQuickCapture() {
  document.getElementById('modal-quick')?.classList.remove('open');
}

function saveQuickTask() {
  const input  = document.getElementById('quick-input');
  const select = document.getElementById('quick-list-select');
  const dueInput = document.getElementById('quick-due-input');
  const title = (input?.value || '').trim();
  const listId = select?.value;
  if (!title || !listId) { input?.focus(); return; }
  const robot = (state.robots || []).find(r => r.id === listId);
  if (!robot) return;
  if (!robot.tasks) robot.tasks = [];
  const dueDate = (dueInput && dueInput.value) ? dueInput.value : null;
  robot.tasks.push({
    id: uid(), title, priority: 'normal', status: 'active',
    dueDate, tags: [], notebook: [], expanded: false, createdAt: Date.now(),
  });
  try { localStorage.setItem(QUICK_LAST_LIST_KEY, listId); } catch {}
  save();
  closeQuickCapture();
  if (typeof renderAllTasks === 'function') renderAllTasks();
  if (typeof renderRobotList === 'function') renderRobotList();
  if (typeof renderRobotDetail === 'function') renderRobotDetail();
}

(function wireQuick() {
  const wire = () => {
    const fab = document.getElementById('quick-fab');
    const overlay = document.getElementById('modal-quick');
    const saveBtn = document.getElementById('quick-save');
    const input = document.getElementById('quick-input');
    const newListBtn = document.getElementById('quick-new-list-btn');
    if (fab && !fab.dataset.bound) {
      fab.dataset.bound = '1';
      fab.addEventListener('click', openQuickCapture);
    }
    if (overlay && !overlay.dataset.bound) {
      overlay.dataset.bound = '1';
      overlay.addEventListener('click', e => { if (e.target === overlay) closeQuickCapture(); });
      overlay.querySelectorAll('[data-close="modal-quick"]').forEach(b => b.addEventListener('click', closeQuickCapture));
      overlay.querySelectorAll('[data-quick-date]').forEach(b => b.addEventListener('click', () => setQuickDateShortcut(b.dataset.quickDate)));
    }
    if (saveBtn && !saveBtn.dataset.bound) { saveBtn.dataset.bound = '1'; saveBtn.addEventListener('click', saveQuickTask); }
    if (newListBtn && !newListBtn.dataset.bound) { newListBtn.dataset.bound = '1'; newListBtn.addEventListener('click', quickCreateList); }
    if (input && !input.dataset.bound) {
      input.dataset.bound = '1';
      input.addEventListener('keydown', e => {
        if (e.key === 'Enter')  { e.preventDefault(); saveQuickTask(); }
        if (e.key === 'Escape') closeQuickCapture();
      });
    }
  };
  wire();
  if (document.readyState !== 'complete') document.addEventListener('DOMContentLoaded', wire);
})();

// ── Morning brief ──────────────────────────────────────
// Show a small "today at a glance" card on the first app open of each day.
// Gated by a per-day flag in localStorage so it never re-appears on reloads
// or SW restarts within the same calendar day.
const BRIEF_KEY = 'b-less-brief-day';

function todaysAgenda() {
  const todayIso = new Date().toISOString().slice(0, 10);
  const tasks = [];
  (state.robots || []).forEach(r => {
    (r.tasks || []).forEach(task => {
      if (task.status === 'done' || !task.dueDate) return;
      const d = new Date(task.dueDate + 'T00:00:00');
      const today = new Date(); today.setHours(0,0,0,0);
      if (d <= today) tasks.push({ task, project: r });
    });
  });
  const meetings = (state.meetings || []).filter(m => m.date === todayIso);
  const visits   = (state.fieldVisits || []).filter(v => v.date === todayIso);
  return { tasks, meetings, visits, todayIso };
}

function maybeShowBrief() {
  let lastShown = null;
  try { lastShown = localStorage.getItem(BRIEF_KEY); } catch {}
  const todayIso = new Date().toISOString().slice(0, 10);
  if (lastShown === todayIso) return;
  // Don't show on a brand-new install where there's nothing to brief about.
  if ((state.robots || []).length === 0 && (state.meetings || []).length === 0 && (state.fieldVisits || []).length === 0) return;
  // Don't crowd a first-time user who's still on the welcome modal.
  if (!state.onboarded) return;

  const a = todaysAgenda();
  if (!a.tasks.length && !a.meetings.length && !a.visits.length) {
    // Even an empty agenda is worth confirming once — but stay minimal.
  }

  const modal = document.getElementById('modal-brief');
  const body  = document.getElementById('brief-body');
  const title = document.getElementById('brief-title');
  if (!modal || !body || !title) return;

  const hour = new Date().getHours();
  title.textContent = hour < 5 ? 'Late night ahead' : hour < 12 ? 'Good morning' : hour < 18 ? 'Good afternoon' : 'Good evening';

  const sections = [];
  if (a.tasks.length) {
    sections.push(`
      <div class="brief-section">
        <div class="brief-section-title">Tasks for today (${a.tasks.length})</div>
        <ul class="brief-list">${a.tasks.slice(0, 8).map(it =>
          `<li><span class="brief-dot ${it.task.status}"></span><span>${escapeHtml(it.task.title)}</span><span class="brief-meta">${escapeHtml(it.project.name)}</span></li>`
        ).join('')}${a.tasks.length > 8 ? `<li class="brief-more">+${a.tasks.length - 8} more</li>` : ''}</ul>
      </div>`);
  }
  if (a.meetings.length) {
    sections.push(`
      <div class="brief-section">
        <div class="brief-section-title">Meetings (${a.meetings.length})</div>
        <ul class="brief-list">${a.meetings.map(m =>
          `<li><span class="brief-dot meeting"></span><span>${escapeHtml(m.title || 'Meeting')}</span>${m.location ? `<span class="brief-meta">${escapeHtml(m.location)}</span>` : ''}</li>`
        ).join('')}</ul>
      </div>`);
  }
  if (a.visits.length) {
    sections.push(`
      <div class="brief-section">
        <div class="brief-section-title">Visits (${a.visits.length})</div>
        <ul class="brief-list">${a.visits.map(v =>
          `<li><span class="brief-dot visit"></span><span>${escapeHtml(v.location || 'Visit')}</span>${v.robot ? `<span class="brief-meta">${escapeHtml(v.robot)}</span>` : ''}</li>`
        ).join('')}</ul>
      </div>`);
  }
  if (!sections.length) {
    sections.push('<p class="brief-empty">Nothing scheduled for today. Have a calm day.</p>');
  }
  body.innerHTML = sections.join('');

  modal.classList.add('open');
  const dismiss = () => {
    modal.classList.remove('open');
    try { localStorage.setItem(BRIEF_KEY, todayIso); } catch {}
  };
  document.getElementById('brief-got-it')?.addEventListener('click', dismiss, { once: true });
  modal.querySelectorAll('[data-close="modal-brief"]').forEach(b => b.addEventListener('click', dismiss, { once: true }));
  modal.addEventListener('click', e => { if (e.target === modal) dismiss(); }, { once: true });
}

// ── Streak / weekly stats ──────────────────────────────
function computeStreakStats() {
  const allTasks = [];
  (state.robots || []).forEach(r => (r.tasks || []).forEach(t => allTasks.push(t)));
  const startOfDay = (d) => { const x = new Date(d); x.setHours(0,0,0,0); return x.getTime(); };
  const today = startOfDay(new Date());
  const dayMs = 86400000;

  // Bucket completions per day
  const perDay = new Map();
  allTasks.forEach(t => {
    if (t.status !== 'done' || !t.completedAt) return;
    const day = startOfDay(new Date(t.completedAt));
    perDay.set(day, (perDay.get(day) || 0) + 1);
  });

  // 7-day total
  let last7 = 0;
  for (let i = 0; i < 7; i++) last7 += (perDay.get(today - i * dayMs) || 0);

  // Streak: consecutive days ending today (or yesterday if nothing today yet)
  let streak = 0;
  let cursor = today;
  if (!perDay.get(cursor)) cursor -= dayMs; // give the user grace if they haven't checked anything off today
  while (perDay.get(cursor)) { streak++; cursor -= dayMs; }

  // Today + tomorrow due counts
  const overdueOrToday = allTasks.filter(t => {
    if (t.status === 'done' || !t.dueDate) return false;
    const d = startOfDay(new Date(t.dueDate + 'T00:00:00'));
    return d <= today;
  }).length;

  return { last7, streak, overdueOrToday };
}

function renderStreakWidget() {
  const els = document.querySelectorAll('.streak-widget');
  if (!els.length) return;
  const s = computeStreakStats();
  const empty = (s.last7 === 0 && s.streak === 0 && s.overdueOrToday === 0);
  const html = empty ? '' : `
    <div class="streak-stat">
      <span class="streak-num">${s.last7}</span>
      <span class="streak-lbl">done this week</span>
    </div>
    <div class="streak-stat">
      <span class="streak-num">${s.streak}</span>
      <span class="streak-lbl">day streak</span>
    </div>
    <div class="streak-stat">
      <span class="streak-num">${s.overdueOrToday}</span>
      <span class="streak-lbl">due now</span>
    </div>
  `;
  els.forEach(el => {
    el.innerHTML = html;
    el.style.display = empty ? 'none' : '';
  });
}

// ── iCal export ────────────────────────────────────────
// Generate a single .ics file containing all upcoming + recent meetings and
// field visits. Meetings become VEVENTs with a 1-hour default duration;
// visits become full-day events. Spec-minimum fields only — most calendar
// apps (Google, Apple, Outlook) accept this.
function escapeIcs(s) {
  return String(s || '').replace(/\\/g, '\\\\').replace(/\r?\n/g, '\\n').replace(/,/g, '\\,').replace(/;/g, '\\;');
}
function icsDateAllDay(iso)  { return iso.replace(/-/g, ''); }                 // 20260415
function icsDateTime(iso, hh = '09', mm = '00') {                              // 20260415T090000
  return iso.replace(/-/g, '') + 'T' + hh + mm + '00';
}
function buildIcs() {
  const lines = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//B-Less//EN',
    'CALSCALE:GREGORIAN',
  ];
  const now = new Date();
  const stamp = now.toISOString().replace(/[-:]/g, '').replace(/\.\d+Z$/, 'Z');

  (state.meetings || []).forEach(m => {
    if (!m.date) return;
    const startIso = icsDateTime(m.date, '09', '00');
    // +1h
    const d = new Date(m.date + 'T09:00:00');
    d.setHours(d.getHours() + 1);
    const endIso = d.toISOString().replace(/[-:]/g, '').replace(/\.\d+Z$/, '').replace(/T(\d{6}).*$/, 'T$1');
    lines.push('BEGIN:VEVENT');
    lines.push('UID:meeting-' + m.id + '@b-less');
    lines.push('DTSTAMP:' + stamp);
    lines.push('DTSTART:' + startIso);
    lines.push('DTEND:'   + endIso);
    lines.push('SUMMARY:' + escapeIcs(m.title || 'Meeting'));
    if (m.location)  lines.push('LOCATION:'    + escapeIcs(m.location));
    const desc = [m.attendees && ('Attendees: ' + m.attendees), m.robot && ('Project: ' + m.robot), m.notes].filter(Boolean).join('\n');
    if (desc)        lines.push('DESCRIPTION:' + escapeIcs(desc));
    lines.push('END:VEVENT');
  });

  (state.fieldVisits || []).forEach(v => {
    if (!v.date) return;
    const start = icsDateAllDay(v.date);
    const endDate = new Date(v.date + 'T00:00:00');
    endDate.setDate(endDate.getDate() + 1);
    const endIso = endDate.toISOString().slice(0, 10).replace(/-/g, '');
    lines.push('BEGIN:VEVENT');
    lines.push('UID:visit-' + v.id + '@b-less');
    lines.push('DTSTAMP:' + stamp);
    lines.push('DTSTART;VALUE=DATE:' + start);
    lines.push('DTEND;VALUE=DATE:'   + endIso);
    lines.push('SUMMARY:' + escapeIcs('Visit: ' + (v.location || '')));
    if (v.location) lines.push('LOCATION:'    + escapeIcs(v.location));
    const desc = [v.robot && ('Project: ' + v.robot), v.notes].filter(Boolean).join('\n');
    if (desc)        lines.push('DESCRIPTION:' + escapeIcs(desc));
    lines.push('END:VEVENT');
  });

  lines.push('END:VCALENDAR');
  // RFC 5545 requires CRLF line endings
  return lines.join('\r\n');
}
function downloadIcs() {
  const ics = buildIcs();
  const blob = new Blob([ics], { type: 'text/calendar;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'b-less-calendar.ics';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

// ── Global search ─────────────────────────────────────
const SEARCH_LIMIT = 40;

function searchAll(rawQuery) {
  const q = String(rawQuery || '').trim().toLowerCase();
  if (!q) return [];
  const tokens = q.split(/\s+/).filter(Boolean);
  const matches = (text) => {
    if (!text) return false;
    const t = String(text).toLowerCase();
    return tokens.every(tk => t.includes(tk));
  };
  // Score: lower = better. Title-hit beats body-hit.
  const score = (titleHit, bodyHit) => titleHit ? 0 : (bodyHit ? 1 : 9);
  const out = [];

  // Build a map: refId → { spaceId, itemId } so we can navigate
  const refIndex = {};
  (state.spaces || []).forEach(sp => {
    (sp.items || []).forEach(it => {
      refIndex[it.type + ':' + it.refId] = { spaceId: sp.id, itemId: it.id };
    });
  });

  // Lists (a.k.a. robots)
  (state.robots || []).forEach(r => {
    const ref = refIndex['list:' + r.id];
    const titleHit = matches(r.name);
    const bodyHit  = matches(r.description) || matches(r.category);
    if (titleHit || bodyHit) {
      out.push({ kind: 'list', s: score(titleHit, bodyHit), title: r.name, sub: r.category || r.description || 'List', ref, refId: r.id });
    }
    // Tasks within this list
    (r.tasks || []).forEach(task => {
      const tHit = matches(task.title);
      const tagHit = (task.tags || []).some(matches);
      const noteHit = (task.notebook || []).some(n => matches(n.text));
      const subHit = (task.subtasks || []).some(s => matches(s.title) || matches(s.note));
      if (tHit || tagHit || noteHit || subHit) {
        out.push({
          kind: 'task',
          s: score(tHit, tagHit || noteHit || subHit),
          title: task.title,
          sub: r.name + (task.dueDate ? ' · ' + task.dueDate : ''),
          ref, refId: r.id, taskId: task.id,
        });
      }
    });
    // Issues within this list
    (r.issues || []).forEach(issue => {
      const iHit = matches(issue.title);
      const noteHit = (issue.notebook || []).some(n => matches(n.text));
      if (iHit || noteHit) {
        out.push({ kind: 'issue', s: score(iHit, noteHit), title: issue.title, sub: r.name + ' · Issue', ref, refId: r.id, issueId: issue.id });
      }
    });
  });

  // Visits
  (state.fieldVisits || []).forEach(v => {
    const titleHit = matches(v.location);
    const bodyHit  = matches(v.robot) || matches(v.notes);
    if (titleHit || bodyHit) {
      const ref = refIndex['visit:' + v.id];
      out.push({ kind: 'visit', s: score(titleHit, bodyHit), title: v.location || 'Visit', sub: (v.date ? v.date + ' · ' : '') + (v.robot || ''), ref, refId: v.id });
    }
  });

  // Meetings
  (state.meetings || []).forEach(m => {
    const titleHit = matches(m.title);
    const bodyHit  = matches(m.location) || matches(m.attendees) || matches(m.robot) || matches(m.notes) || (m.actions || []).some(a => matches(a.text));
    if (titleHit || bodyHit) {
      const ref = refIndex['meeting:' + m.id];
      out.push({ kind: 'meeting', s: score(titleHit, bodyHit), title: m.title || 'Meeting', sub: (m.date ? m.date + ' · ' : '') + (m.location || ''), ref, refId: m.id });
    }
  });

  out.sort((a, b) => a.s - b.s || a.title.localeCompare(b.title));
  return out.slice(0, SEARCH_LIMIT);
}

const SEARCH_KIND_LABEL = {
  list: 'List', task: 'Task', issue: 'Issue', visit: 'Visit', meeting: 'Meeting',
};

function renderSearchResults(query) {
  const list = document.getElementById('search-results');
  if (!list) return;
  const items = searchAll(query);
  if (!query) {
    list.innerHTML = '<div class="search-empty">Type to search across tasks, lists, meetings and visits.</div>';
    return;
  }
  if (!items.length) {
    list.innerHTML = `<div class="search-empty">No matches for "${escapeHtml(query)}".</div>`;
    return;
  }
  list.innerHTML = items.map((it, i) => `
    <button class="search-result" data-idx="${i}" type="button">
      <span class="search-result-kind">${SEARCH_KIND_LABEL[it.kind]}</span>
      <span class="search-result-body">
        <span class="search-result-title">${escapeHtml(it.title || '')}</span>
        <span class="search-result-sub">${escapeHtml(it.sub || '')}</span>
      </span>
    </button>
  `).join('');
  list.querySelectorAll('.search-result').forEach((el, i) => {
    el.addEventListener('click', () => navigateToSearchResult(items[i]));
  });
}

function navigateToSearchResult(it) {
  closeSearchModal();
  if (!it) return;
  // Best-effort navigation: open the parent (list/meeting/visit) via the
  // existing space-item flow so all the right state and renderers fire.
  if (it.kind === 'task' || it.kind === 'issue' || it.kind === 'list') {
    if (it.ref) {
      selectSpaceItem(it.ref.spaceId, it.ref.itemId);
    } else {
      // Orphan: jump straight to the list
      state.currentRobotId = it.refId;
      activateSection('robots');
      renderRobotList(); renderRobotDetail();
    }
    if (it.kind === 'task') {
      // Expand the task so the user lands on it
      const robot = (state.robots || []).find(r => r.id === it.refId);
      const task  = robot && (robot.tasks || []).find(t => t.id === it.taskId);
      if (task) { task.expanded = true; renderRobotDetail(); }
    }
    if (it.kind === 'issue') {
      const robot = (state.robots || []).find(r => r.id === it.refId);
      const issue = robot && (robot.issues || []).find(x => x.id === it.issueId);
      if (issue) { issue.expanded = true; renderRobotDetail(); }
    }
  } else if (it.kind === 'meeting') {
    if (it.ref) selectSpaceItem(it.ref.spaceId, it.ref.itemId);
    else { state.currentMeetingId = it.refId; activateSection('meetings'); renderMeetingList(); renderMeetingDetail(); }
  } else if (it.kind === 'visit') {
    if (it.ref) selectSpaceItem(it.ref.spaceId, it.ref.itemId);
    else { activateSection('field-visits'); renderVisits(); }
  }
}

function openSearchModal() {
  const modal = document.getElementById('modal-search');
  const input = document.getElementById('search-input');
  if (!modal || !input) return;
  modal.classList.add('open');
  input.value = '';
  renderSearchResults('');
  // Focus after the open transition starts so iOS shows the keyboard.
  setTimeout(() => input.focus(), 50);
}

function closeSearchModal() {
  document.getElementById('modal-search')?.classList.remove('open');
}

(function wireSearch() {
  const wire = () => {
    const input = document.getElementById('search-input');
    const overlay = document.getElementById('modal-search');
    const trigger = document.getElementById('open-search-btn');
    if (input && !input.dataset.bound) {
      input.dataset.bound = '1';
      input.addEventListener('input', e => renderSearchResults(e.target.value));
      input.addEventListener('keydown', e => { if (e.key === 'Escape') closeSearchModal(); });
    }
    if (overlay && !overlay.dataset.bound) {
      overlay.dataset.bound = '1';
      overlay.addEventListener('click', e => { if (e.target === overlay) closeSearchModal(); });
      overlay.querySelectorAll('[data-close="modal-search"]').forEach(b => b.addEventListener('click', closeSearchModal));
    }
    if (trigger && !trigger.dataset.bound) {
      trigger.dataset.bound = '1';
      trigger.addEventListener('click', () => { openSearchModal(); closeSpaceDrawer && closeSpaceDrawer(); });
    }
  };
  wire();
  // Also wire after init in case elements weren't in the DOM yet
  if (document.readyState !== 'complete') document.addEventListener('DOMContentLoaded', wire);
  document.addEventListener('keydown', e => {
    if ((e.ctrlKey || e.metaKey) && (e.key === 'k' || e.key === 'K')) {
      e.preventDefault();
      const isOpen = document.getElementById('modal-search')?.classList.contains('open');
      if (isOpen) closeSearchModal(); else openSearchModal();
    }
  });
})();

function maybeShowWelcome() {
  if (state.onboarded) return;
  const modal = document.getElementById('modal-welcome');
  if (!modal) return;
  modal.classList.add('open');
  const dismiss = () => {
    modal.classList.remove('open');
    state.onboarded = true;
    save();
  };
  document.getElementById('welcome-got-it')?.addEventListener('click', dismiss, { once: true });
  modal.querySelectorAll('[data-close="modal-welcome"]').forEach(b => b.addEventListener('click', dismiss, { once: true }));
  modal.addEventListener('click', e => { if (e.target === modal) dismiss(); }, { once: true });
}

// ── Migration: build state.spaces from legacy collections ──
// IDEMPOTENT: also catches "orphan" entities that exist in legacy collections
// but aren't referenced by any space (e.g. after restoring a pre-v4 backup).
function migrateToSpaces() {
  // First-time bootstrap: create Work + Personal
  const firstTime = !state.spaces || !Array.isArray(state.spaces) || state.spaces.length === 0;
  if (firstTime) {
    state.spaces = [
      { id: uid(), name: 'Work',     items: [] },
      { id: uid(), name: 'Personal', items: [] },
    ];
  }

  const work     = state.spaces.find(s => s.name === 'Work')     || state.spaces[0];
  const personal = state.spaces.find(s => s.name === 'Personal') || state.spaces[1] || work;

  // Ensure reviews exists
  if (!state.reviews || typeof state.reviews !== 'object') state.reviews = { week: {}, month: {} };
  if (!state.reviews.week)  state.reviews.week  = {};
  if (!state.reviews.month) state.reviews.month = {};

  // ── Shared-space fields (Phase 1: schema only, no UI yet) ──
  // Existing Spaces stay local-only (`shared: false` is the default).
  // When a Space is shared, the following fields get populated:
  //   shared:              true
  //   driveFileId:         '<google-drive-file-id>'
  //   ownerEmail:          'owner@example.com'
  //   myRole:              'owner' | 'writer' | 'reader'
  //   collaborators:       [{ email, role, permissionId }]
  //   lastSyncedRevision:  '<headRevisionId returned by Drive>'
  //   lastSyncedAt:        Date.now() of last successful pull or push
  state.spaces.forEach(sp => {
    if (sp.shared === undefined)        sp.shared = false;
    if (!Array.isArray(sp.collaborators)) sp.collaborators = [];
  });

  // Build a set of all currently-referenced refIds, by type
  const referenced = { list: new Set(), meeting: new Set(), visit: new Set() };
  state.spaces.forEach(sp => {
    sp.items.forEach(it => { if (referenced[it.type]) referenced[it.type].add(it.refId); });
  });

  // Lists / projects: any robot not referenced anywhere → add to Work (or Personal if mode=daily)
  let added = false;
  (state.robots || []).forEach(r => {
    if (referenced.list.has(r.id)) return;
    const target = r.mode === 'daily' ? personal : work;
    target.items.push({ id: uid(), type: 'list', refId: r.id });
    added = true;
  });

  // Meetings — orphans → Work
  (state.meetings || []).forEach(m => {
    if (referenced.meeting.has(m.id)) return;
    work.items.push({ id: uid(), type: 'meeting', refId: m.id });
    added = true;
  });

  // Visits — orphans → Work
  (state.fieldVisits || []).forEach(v => {
    if (referenced.visit.has(v.id)) return;
    work.items.push({ id: uid(), type: 'visit', refId: v.id });
    added = true;
  });

  // Spaces only carry lists now. Drop any legacy meeting/visit/journal
  // items left over from older versions — they should never have lived
  // in a space and shouldn't sync.
  const liveIds = {
    list:    new Set((state.robots || []).map(r => r.id)),
  };
  let removed = false;
  state.spaces.forEach(sp => {
    const before = sp.items.length;
    sp.items = sp.items.filter(it => liveIds[it.type] && liveIds[it.type].has(it.refId));
    if (sp.items.length !== before) removed = true;
  });

  // Dedup: the same (type, refId) appearing in multiple spaces is a stale-data
  // bug (an older silent-duplication path left a copy behind). Keep the OLDEST
  // item.id — uid is timestamp-prefixed, so the oldest item is the one the
  // user placed first; later additions are almost always from the duplication
  // bug firing after the original placement. This preserves user intent
  // instead of letting space-order dictate the winner.
  {
    const oldest = new Map(); // "type:refId" -> oldest item.id seen
    state.spaces.forEach(sp => {
      sp.items.forEach(it => {
        const key = it.type + ':' + it.refId;
        const prev = oldest.get(key);
        if (!prev || it.id < prev) oldest.set(key, it.id);
      });
    });
    state.spaces.forEach(sp => {
      const before = sp.items.length;
      sp.items = sp.items.filter(it => {
        const key = it.type + ':' + it.refId;
        return oldest.get(key) === it.id;
      });
      if (sp.items.length !== before) removed = true;
    });
  }

  if (firstTime || added || removed) {
    if (!state.currentSpaceId) state.currentSpaceId = work.id;
    state.collapsedSpaces = state.collapsedSpaces || {};
    save();
  }
}

// ── Helpers ────────────────────────────────────────────
function findSpace(id) { return state.spaces.find(s => s.id === id); }
function findItem(spaceId, itemId) {
  const sp = findSpace(spaceId);
  return sp ? sp.items.find(i => i.id === itemId) : null;
}
function findItemAnywhere(itemId) {
  for (const sp of state.spaces) {
    const it = sp.items.find(i => i.id === itemId);
    if (it) return { space: sp, item: it };
  }
  return null;
}
// Find which space holds a list item referencing the given robot id
function findSpaceOfRobot(robotId) {
  for (const sp of state.spaces) {
    if (sp.items.some(i => i.type === 'list' && i.refId === robotId)) return sp;
  }
  return null;
}
// Read-only enforcement helpers — used by renderRobotDetail and others.
function isRobotReadOnly(robotId) {
  const sp = findSpaceOfRobot(robotId);
  return !!(sp && sp.shared && sp.myRole === 'reader');
}
function getRobotSpaceOwner(robotId) {
  const sp = findSpaceOfRobot(robotId);
  if (!sp) return null;
  return sp.ownerName || sp.ownerEmail || null;
}
// Populate the Space dropdown in modal-robot
function refreshSpaceSelect(selectedSpaceId) {
  const sel = document.getElementById('robot-space');
  if (!sel) return;
  sel.innerHTML = (state.spaces || []).map(sp =>
    `<option value="${sp.id}" ${sp.id === selectedSpaceId ? 'selected' : ''}>${escapeHtml(sp.name)}</option>`
  ).join('');
}
// Move a robot's list item between spaces (preserves item id so currentItemId stays valid)
function moveRobotToSpace(robotId, targetSpaceId) {
  const src = findSpaceOfRobot(robotId);
  const dst = findSpace(targetSpaceId);
  if (!src || !dst || src.id === dst.id) return;
  const it = src.items.find(i => i.type === 'list' && i.refId === robotId);
  if (!it) return;
  src.items = src.items.filter(i => i.id !== it.id);
  dst.items.push(it);
}
function resolveItemData(item) {
  if (!item) return null;
  if (item.type === 'list')    return (state.robots      || []).find(r => r.id === item.refId);
  if (item.type === 'meeting') return (state.meetings    || []).find(m => m.id === item.refId);
  if (item.type === 'visit')   return (state.fieldVisits || []).find(v => v.id === item.refId);
  return null;
}
function itemDisplayName(item) {
  const d = resolveItemData(item);
  if (!d) return '(missing)';
  return d.name || d.title || d.location || 'Untitled';
}

// ── Sidebar render ─────────────────────────────────────
function renderSidebar() {
  const list = document.getElementById('space-list');
  if (!list) return;

  if (!state.collapsedSpaces) state.collapsedSpaces = {};
  if (!state.collapsedGroups) state.collapsedGroups = {};

  function itemRow(it, spaceId) {
    const data = resolveItemData(it);
    if (!data) return '';
    const active = it.id === state.currentItemId ? 'active' : '';
    const name = escapeHtml(itemDisplayName(it));
    return `
      <div class="space-item ${active}" data-item-id="${it.id}" data-space-id="${spaceId}">
        <span class="space-item-icon">${ITEM_ICONS[it.type] || ''}</span>
        <span class="space-item-name">${name}</span>
      </div>`;
  }

  function subgroup(label, type, items, spaceId) {
    if (!items.length) return '';
    const key = spaceId + ':' + type;
    const collapsed = !!state.collapsedGroups[key];
    const rows = items.map(it => itemRow(it, spaceId)).join('');
    return `
      <div class="space-subgroup ${collapsed ? 'collapsed' : ''}" data-subgroup-key="${key}">
        <div class="space-subheader">
          <span class="space-subchev">${ICO.chevron}</span>
          <span class="space-item-icon space-subicon">${ITEM_ICONS[type] || ''}</span>
          <span class="space-subname">${escapeHtml(label)}</span>
          <span class="space-subcount">${items.length}</span>
          <button class="space-sub-add-btn" data-sub-add-type="${type}" data-sub-add-space="${spaceId}" title="${t('btn.add') || 'Add'} ${escapeHtml(label.toLowerCase())}" aria-label="${t('btn.add') || 'Add'}">+</button>
        </div>
        <div class="space-subitems">${rows}</div>
      </div>`;
  }

  list.innerHTML = (state.spaces || []).map(sp => {
    const collapsed = !!state.collapsedSpaces[sp.id];
    const lists    = sp.items.filter(i => i.type === 'list');
    const meetings = sp.items.filter(i => i.type === 'meeting');

    // Lists are flat (each is its own page). Meetings group up.
    // Visits are now global — accessible from the header cross-nav (not nested in spaces).
    const listsHtml    = lists.map(it => itemRow(it, sp.id)).join('');
    const meetingsHtml = subgroup(t('sidebar.meetings') || 'Meetings', 'meeting', meetings, sp.id);

    const body = listsHtml + meetingsHtml;

    return `
      <div class="space-group ${collapsed ? 'collapsed' : ''}" data-space-id="${sp.id}">
        <div class="space-header">
          <span class="space-chev">${ICO.chevron}</span>
          <span class="space-name">${escapeHtml(sp.name)}</span>
          ${sp.shared ? `<span class="space-shared-badge" title="Shared (${roleLabel(sp.myRole || 'reader')})" aria-label="Shared"><svg viewBox="0 0 24 24" width="11" height="11" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="7" r="3"/><circle cx="17" cy="7" r="3"/><path d="M2 21v-1a4 4 0 0 1 4-4h3"/><path d="M14 16h3a4 4 0 0 1 4 4v1"/></svg></span>` : ''}
          <button class="space-add-btn" data-add-to-space="${sp.id}" title="Add item" aria-label="Add item">+</button>
          <button class="space-more-btn" data-space-menu="${sp.id}" title="Space options" aria-label="Space options">⋯</button>
        </div>
        <div class="space-items">${body || '<div class="space-empty">No items</div>'}</div>
      </div>`;
  }).join('');

  // Item click (regular items)
  list.querySelectorAll('.space-item:not(.space-jrn-item)').forEach(el => {
    el.addEventListener('click', () => selectSpaceItem(el.dataset.spaceId, el.dataset.itemId));
  });

  // Drag-drop: items can be moved between Spaces
  list.querySelectorAll('.space-item:not(.space-jrn-item)').forEach(el => {
    el.draggable = true;
    el.addEventListener('dragstart', e => {
      e.dataTransfer.setData('text/karta-item', JSON.stringify({
        itemId: el.dataset.itemId,
        sourceSpaceId: el.dataset.spaceId,
      }));
      e.dataTransfer.effectAllowed = 'move';
      el.classList.add('dragging');
    });
    el.addEventListener('dragend', () => el.classList.remove('dragging'));
  });
  list.querySelectorAll('.space-group').forEach(el => {
    el.addEventListener('dragover', e => {
      const types = Array.from(e.dataTransfer.types);
      if (!types.includes('text/karta-item')) return;
      e.preventDefault();
      e.dataTransfer.dropEffect = 'move';
      el.classList.add('drag-target');
    });
    el.addEventListener('dragleave', e => {
      // Only clear when leaving the group entirely
      if (e.target === el) el.classList.remove('drag-target');
    });
    el.addEventListener('drop', e => {
      e.preventDefault();
      el.classList.remove('drag-target');
      const targetSpaceId = el.dataset.spaceId;
      let data;
      try { data = JSON.parse(e.dataTransfer.getData('text/karta-item')); } catch { return; }
      if (!data || !data.itemId || data.sourceSpaceId === targetSpaceId) return;
      const src = findSpace(data.sourceSpaceId);
      const dst = findSpace(targetSpaceId);
      if (!src || !dst) return;
      const moving = src.items.find(i => i.id === data.itemId);
      if (!moving) return;
      src.items = src.items.filter(i => i.id !== data.itemId);
      dst.items.push(moving);
      state.currentSpaceId = targetSpaceId;
      save();
      renderSidebar();
    });
  });
  // Space header click → toggle collapse
  list.querySelectorAll('.space-header').forEach(el => {
    el.addEventListener('click', e => {
      if (e.target.closest('.space-add-btn') || e.target.closest('.space-more-btn')) return;
      const sid = el.parentElement.dataset.spaceId;
      state.collapsedSpaces[sid] = !state.collapsedSpaces[sid];
      save();
      renderSidebar();
    });
  });
  // Sub-group header click → toggle collapse for Meetings/Visits group
  list.querySelectorAll('.space-subheader').forEach(el => {
    el.addEventListener('click', e => {
      if (e.target.closest('.space-sub-add-btn')) return;
      const key = el.parentElement.dataset.subgroupKey;
      state.collapsedGroups[key] = !state.collapsedGroups[key];
      save();
      renderSidebar();
    });
  });
  // Sub-group "+" → open type-specific add modal targeted at this space
  list.querySelectorAll('.space-sub-add-btn').forEach(el => {
    el.addEventListener('click', e => {
      e.stopPropagation();
      const type    = el.dataset.subAddType;
      const spaceId = el.dataset.subAddSpace;
      pendingItemAttach = { spaceId, type };
      if (type === 'meeting') {
        document.getElementById('add-meeting-btn')?.click();
      } else if (type === 'visit') {
        document.getElementById('add-visit-btn')?.click();
      }
    });
  });
  // Add item
  list.querySelectorAll('.space-add-btn').forEach(el => {
    el.addEventListener('click', e => {
      e.stopPropagation();
      openAddItemPicker(el.dataset.addToSpace);
    });
  });
  // Space menu (rename/delete)
  list.querySelectorAll('.space-more-btn').forEach(el => {
    el.addEventListener('click', e => {
      e.stopPropagation();
      openSpaceMenu(el.dataset.spaceMenu, el);
    });
  });
}

// ── Click an item: navigate to the matching legacy section ──
function selectSpaceItem(spaceId, itemId) {
  const item = findItem(spaceId, itemId);
  if (!item) return;
  state.currentSpaceId = spaceId;
  state.currentItemId  = itemId;

  if (item.type === 'list') {
    if (item.refId !== state.currentRobotId) collapseCurrentListTasks();
    state.currentRobotId = item.refId;
    activateSection('robots');
    if (typeof renderRobotList === 'function')   renderRobotList();
    if (typeof renderRobotDetail === 'function') renderRobotDetail();
  } else if (item.type === 'meeting') {
    state.currentMeetingId = item.refId;
    activateSection('meetings');
    if (typeof renderMeetingList === 'function')   renderMeetingList();
    if (typeof renderMeetingDetail === 'function') renderMeetingDetail();
  } else if (item.type === 'visit') {
    activateSection('field-visits');
    if (typeof renderVisits === 'function') renderVisits();
  }

  save();
  renderSidebar();
  closeSpaceDrawer();
}

function activateSection(id) {
  document.querySelectorAll('.section').forEach(s => s.classList.toggle('active', s.id === id));
  // Sync the (now-hidden) tab buttons so existing logic that reads activeSection works
  document.querySelectorAll('.tab').forEach(t => t.classList.toggle('active', t.dataset.tab === id));
  document.querySelectorAll('.settings-nav-btn').forEach(btn => btn.classList.toggle('active', id === 'more'));
  if (id === 'robots' || id === 'topics') activeSection = id;
  updateTopbarTitle(id);
  // Highlight the matching sidebar nav button.
  // The drawer's `data-drawer-go` values mostly match section ids; a couple
  // of legacy aliases are mapped here.
  const aliasToDrawer = { 'field-visits': 'visits', 'meetings': 'meetings' };
  const drawerKey = aliasToDrawer[id] || id;
  document.querySelectorAll('[data-drawer-go]').forEach(b => {
    b.classList.toggle('active', b.dataset.drawerGo === drawerKey);
  });
  if (MORE_SUBTABS.has(id)) setBnavActiveFor('more');
}

// ── Topbar title (centered in app-topbar, reflects active section) ──
const TOPBAR_TITLES = {
  robots: 'My Work',
  home: 'Home',
  inbox: 'Inbox',
  'all-tasks': 'All Tasks',
  calendar: 'Calendar',
  meetings: 'Meetings',
  'field-visits': 'Visits',
  reviews: 'Reviews',
  more: 'Settings',
  settings: 'Settings',
};
function updateTopbarTitle(id) {
  const el = document.getElementById('topbar-title-text');
  if (el) {
    el.textContent = TOPBAR_TITLES[id] || 'My Work';
    return;
  }
  // Fallback for the older flat structure
  const flat = document.getElementById('topbar-title');
  if (flat) flat.textContent = TOPBAR_TITLES[id] || 'My Work';
}

// ── Add Item picker — spaces only carry lists now, so skip the picker
// and open the new-list flow directly. Meetings / visits / journal /
// links / reviews are global features under More.
function openAddItemPicker(spaceId) {
  if (!spaceId) return;
  pendingItemAttach = { spaceId, type: 'list' };
  if (typeof openEntityModal === 'function') openEntityModal('robot');
}

let pendingItemAttach = null;

// Watch for saves; if a new robot/meeting/visit appeared, attach to pending space
const _origSave = save;
save = function() {
  _origSave.apply(this, arguments);
  if (!pendingItemAttach) return;
  const { spaceId, type } = pendingItemAttach;
  const sp = findSpace(spaceId);
  if (!sp) { pendingItemAttach = null; return; }
  let newRefId = null;
  if (type === 'list')    newRefId = state.currentRobotId;
  if (type === 'meeting') newRefId = state.currentMeetingId;
  if (type === 'visit')   {
    // Visits don't have a "current" id; pick the most recent
    const last = (state.fieldVisits || [])[state.fieldVisits.length - 1];
    newRefId = last && last.id;
  }
  if (!newRefId) return;
  // Only auto-attach when the refId isn't already in ANY space. The previous
  // version only checked the target space, so a stale pendingItemAttach (e.g.
  // from a cancelled "Add to X" flow) could silently duplicate an existing
  // item into a second space on the next save() call.
  const alreadyAttached = state.spaces.some(s =>
    s.items.some(i => i.type === type && i.refId === newRefId)
  );
  if (alreadyAttached) { pendingItemAttach = null; return; }
  const newItem = { id: uid(), type, refId: newRefId };
  sp.items.push(newItem);
  state.currentItemId = newItem.id;
  state.currentSpaceId = spaceId;
  pendingItemAttach = null;
  _origSave();
  renderSidebar();
};

// ── Add Space ──
async function addSpace() {
  const name = await promptInput({
    title: 'New Space',
    label: t('space.name_prompt') || 'Space name',
    placeholder: 'e.g. Work, Side project',
    okText: 'Create',
  });
  if (!name || !name.trim()) return;
  const sp = { id: uid(), name: name.trim(), items: [] };
  state.spaces.push(sp);
  save();
  renderSidebar();
}

// Lightweight floating menu shown next to the Space ⋯ button. Replaces
// the previous native prompt() chooser.
let _spaceMenuEl = null;
function closeSpaceMenu() {
  if (_spaceMenuEl && _spaceMenuEl.parentNode) _spaceMenuEl.parentNode.removeChild(_spaceMenuEl);
  _spaceMenuEl = null;
  document.removeEventListener('click', _spaceMenuOutsideHandler, true);
  document.removeEventListener('keydown', _spaceMenuKeyHandler, true);
}
function _spaceMenuOutsideHandler(e) {
  if (!_spaceMenuEl) return;
  if (_spaceMenuEl.contains(e.target)) return;
  closeSpaceMenu();
}
function _spaceMenuKeyHandler(e) {
  if (e.key === 'Escape') { closeSpaceMenu(); e.stopPropagation(); }
}

function openSpaceMenu(spaceId, anchorEl) {
  const sp = findSpace(spaceId);
  if (!sp) return;
  closeSpaceMenu();
  // Resolve anchor: prefer the clicked button, otherwise look up by spaceId
  const anchor = anchorEl
    || document.querySelector(`[data-space-share="${cssEscape(spaceId)}"]`)
    || document.querySelector(`[data-space-menu="${cssEscape(spaceId)}"]`);

  const menu = document.createElement('div');
  menu.className = 'space-menu';
  menu.innerHTML = `
    <button class="space-menu-item" data-act="rename" type="button">
      <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4z"/></svg>
      <span>Rename</span>
    </button>
    <button class="space-menu-item" data-act="share" type="button">
      <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>
      <span>${sp.shared ? 'Manage sharing…' : 'Share…'}</span>
    </button>
    <div class="space-menu-sep"></div>
    <button class="space-menu-item space-menu-danger" data-act="delete" type="button">
      <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-2 14a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2L5 6"/><path d="M10 11v6M14 11v6"/><path d="M9 6V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2"/></svg>
      <span>Delete</span>
    </button>
  `;
  // Position the menu (fixed, anchored under-right of the anchor if available,
  // otherwise floating mid-viewport).
  Object.assign(menu.style, { position: 'fixed', zIndex: 600 });
  if (anchor) {
    const rect = anchor.getBoundingClientRect();
    const top  = Math.min(rect.bottom + 4, window.innerHeight - 200);
    // Open the menu so its right edge aligns with the anchor's right edge.
    menu.style.top  = top + 'px';
    menu.style.left = 'auto';
    menu.style.right = (window.innerWidth - rect.right) + 'px';
  } else {
    menu.style.top  = '20%';
    menu.style.left = '50%';
    menu.style.transform = 'translateX(-50%)';
  }
  document.body.appendChild(menu);
  _spaceMenuEl = menu;

  // Wire actions
  menu.querySelectorAll('[data-act]').forEach(btn => {
    btn.addEventListener('click', async e => {
      e.stopPropagation();
      const act = btn.dataset.act;
      closeSpaceMenu();
      if (act === 'rename') {
        const next = await promptInput({
          title: 'Rename Space',
          label: 'New name',
          value: sp.name,
          okText: 'Rename',
        });
        const trimmed = next && next.trim();
        if (trimmed && trimmed !== sp.name) {
          sp.name = trimmed;
          save();
          renderSidebar();
          if (typeof renderHome === 'function') renderHome();
          // If this is a shared Space we own, also rename the Drive file
          // so the file in Drive UI matches. save() already debounce-pushes
          // the new name as part of payload.space.name, so collaborators
          // get the rename through normal sync.
          if (sp.shared && sp.driveFileId && sp.myRole === 'owner' &&
              DriveAPI && DriveAPI.renameSpaceFile) {
            DriveAPI.renameSpaceFile(sp.driveFileId, sp.name).catch(() => {});
          }
        }
      } else if (act === 'share') {
        openShareSpaceModal(spaceId);
      } else if (act === 'delete') {
        if (state.spaces.length <= 1) { alertDialog({ title: 'Cannot delete', message: 'You need at least one Space.' }); return; }
        if (!(await confirmDialog({
          title: `Delete "${sp.name}"`,
          message: 'Items inside are unlinked but their underlying data is kept.',
          okText: 'Delete',
          danger: true,
        }))) return;
        state.spaces = state.spaces.filter(s => s.id !== spaceId);
        if (state.currentSpaceId === spaceId) state.currentSpaceId = state.spaces[0].id;
        save(); renderSidebar();
        if (typeof renderHome === 'function') renderHome();
      }
    });
  });

  // Close on outside click or ESC. Use capture so we beat any nested handlers.
  setTimeout(() => {
    document.addEventListener('click', _spaceMenuOutsideHandler, true);
    document.addEventListener('keydown', _spaceMenuKeyHandler, true);
  }, 0);
}

// CSS.escape polyfill — fine to use as cssEscape since older browsers may
// lack it in some embeds; modern ones all have it.
function cssEscape(s) {
  if (typeof CSS !== 'undefined' && CSS.escape) return CSS.escape(s);
  return String(s).replace(/[^a-zA-Z0-9_-]/g, c => '\\' + c);
}

// ──────────────────────────────────────────────────────────
// SHARED SPACES — Phase 2: Share modal UI
// ──────────────────────────────────────────────────────────
let _shareTargetSpaceId = null;

function openShareSpaceModal(spaceId) {
  const sp = findSpace(spaceId);
  if (!sp) return;
  _shareTargetSpaceId = spaceId;
  const titleEl = document.getElementById('share-modal-title');
  if (titleEl) titleEl.textContent = `Share — ${sp.name}`;
  renderShareSpaceBody();
  if (typeof openModal === 'function') openModal('modal-share-space');

  // Role-aware auto-sync on modal open. Critical: never auto-PUSH from
  // a non-owner — a writer who just imported the empty legacy file
  // would silently overwrite the owner's data with empty content.
  //
  //   Owner   → auto-push the latest local snapshot (upgrades legacy
  //             metadata-only files to the self-contained payload).
  //   Writer/Reader → auto-pull so they see whatever the owner last
  //             wrote, instead of stale imported data.
  if (sp.shared && sp.driveFileId && DriveAPI && DriveAPI.isSignedIn && DriveAPI.isSignedIn()) {
    setTimeout(async () => {
      try {
        if (sp.myRole === 'owner' || sp.myRole === 'writer') {
          // Both owner and writer: pull → merge → push.
          // This ensures each side's spaceGoals, tasks, etc. are combined
          // before writing back — no one overwrites the other's additions.
          const pulled = await DriveAPI.pullSpaceFile(sp.driveFileId);
          if (pulled && pulled.payload && pulled.payload.space) {
            const savedCollabs = sp.collaborators || [];
            mergeImportedSpacePayload(pulled);
            const updated = findSpace(sp.id);
            if (updated) { updated.collaborators = savedCollabs; sp = updated; }
          }
          // Push merged state; skip conflict check (we just pulled).
          const r = await DriveAPI.pushSpaceFile(sp.driveFileId, findSpace(sp.id), null);
          const fresh = findSpace(sp.id);
          if (fresh) { fresh.lastSyncedRevision = r.revisionId; fresh.lastSyncedAt = Date.now(); }
          save();
          if (typeof renderHome === 'function') renderHome();
          if (typeof renderSidebar === 'function') renderSidebar();
          if (typeof renderRobotList === 'function') renderRobotList();
          if (typeof renderRobotDetail === 'function') renderRobotDetail();
          if (typeof renderReviews === 'function') renderReviews();
          if (_shareTargetSpaceId === sp.id && document.getElementById('modal-share-space')?.classList.contains('open')) {
            renderShareSpaceBody({ status: 'Synced (' + payloadCounts(findSpace(sp.id)) + ').' });
          }
        } else {
          // Reader: pull only
          const r = await DriveAPI.pullSpaceFile(sp.driveFileId);
          if (r && r.payload && r.payload.space) {
            const savedCollabs = sp.collaborators || [];
            mergeImportedSpacePayload(r);
            const updated = findSpace(sp.id);
            if (updated) updated.collaborators = savedCollabs;
            save();
            if (typeof renderHome === 'function') renderHome();
            if (typeof renderSidebar === 'function') renderSidebar();
            if (typeof renderRobotList === 'function') renderRobotList();
            if (typeof renderRobotDetail === 'function') renderRobotDetail();
            if (typeof renderReviews === 'function') renderReviews();
            if (_shareTargetSpaceId === sp.id && document.getElementById('modal-share-space')?.classList.contains('open')) {
              renderShareSpaceBody({ status: 'Pulled latest from Drive (' + payloadCountsFromPayload(r.payload) + ').' });
            }
          }
        }
      } catch {
        // Conflict or transient error — user can manually pull/push.
      }
    }, 250);
  }
}

// Diagnostic helpers — show what's in the payload so the user can
// verify nothing was dropped on push/pull.
function payloadCounts(space) {
  if (!space) return '0 lists';
  const refs = new Set((space.items || []).filter(i => i.type === 'list').map(i => i.refId));
  const lists  = (state.robots      || []).filter(r => refs.has(r.id)).length;
  const mRefs  = new Set((space.items || []).filter(i => i.type === 'meeting').map(i => i.refId));
  const meets  = (state.meetings    || []).filter(m => mRefs.has(m.id)).length;
  const vRefs  = new Set((space.items || []).filter(i => i.type === 'visit').map(i => i.refId));
  const vis    = (state.fieldVisits || []).filter(v => vRefs.has(v.id)).length;
  return `${lists} lists, ${meets} meetings, ${vis} visits`;
}
function payloadCountsFromPayload(p) {
  if (!p) return '0 lists';
  return `${(p.robots||[]).length} lists, ${(p.meetings||[]).length} meetings, ${(p.visits||[]).length} visits`;
}

function renderShareSpaceBody(extra) {
  const body = document.getElementById('share-body');
  if (!body) return;
  const sp = findSpace(_shareTargetSpaceId);
  if (!sp) return;

  const signedIn = (typeof DriveAPI !== 'undefined') && DriveAPI.isSignedIn && DriveAPI.isSignedIn();
  const me = (DriveAPI && DriveAPI.getUserInfo && DriveAPI.getUserInfo()) || null;
  const pending = pendingSyncCount(sp.id);
  const status = extra && extra.status ? `<div class="share-status">${escapeHtml(extra.status)}</div>` : '';
  const error  = extra && extra.error  ? `<div class="share-error">${escapeHtml(extra.error)}</div>` : '';
  const conflict = extra && extra.conflict ? `
    <div class="share-conflict">
      <div class="share-conflict-title">Conflict detected</div>
      <div class="share-conflict-copy">Drive has a newer version. Choose how to continue.</div>
      <div class="share-conflict-actions">
        <button class="btn-primary" id="share-conflict-pull" type="button">Use Drive version</button>
        <button class="btn-ghost" id="share-conflict-force" type="button">Overwrite Drive</button>
      </div>
    </div>
  ` : '';

  // Not signed in → ask them to authenticate via the avatar popover.
  if (!signedIn) {
    body.innerHTML = `
      <p class="share-blurb">To share a Space you need to be signed in to Google Drive. Click the avatar in the top-right to sign in, then come back here.</p>
      ${error}
    `;
    return;
  }

  // Not shared yet → offer to share.
  if (!sp.shared || !sp.driveFileId) {
    body.innerHTML = `
      <p class="share-blurb">Shares a copy of this Space to your Google Drive (private "B-Less/spaces" folder). Invite people by email — they need a Google account.</p>
      <ul class="share-bullets">
        <li>Editors can add / edit / delete items.</li>
        <li>Viewers see the latest content but can't change it.</li>
        <li>Last-write-wins — conflicts prompt a reload.</li>
      </ul>
      ${status}${error}
      <div class="modal-actions">
        <button class="btn-ghost" data-close="modal-share-space">Cancel</button>
        <button class="btn-primary" id="share-enable-btn" type="button">Share this Space</button>
      </div>
    `;
    document.getElementById('share-enable-btn')?.addEventListener('click', enableSharingForCurrentSpace);
    return;
  }

  // Already shared — show collaborators, owner, add form, stop-sharing.
  const isOwner = sp.myRole === 'owner' || sp.ownerEmail === (me && me.email);
  const activityRows = getSharedActivities()
    .filter(it => it.spaceId === sp.id)
    .slice(0, 8)
    .map(it => `
      <div class="share-activity-row">
        <span>${escapeHtml(sharedActivityText(it.kind))}: ${escapeHtml(it.taskTitle || 'Task')}</span>
        <small>${it.actorEmail ? escapeHtml(it.actorEmail) + ' · ' : ''}${escapeHtml(new Date(it.at || Date.now()).toLocaleString())}</small>
      </div>
    `).join('');
  const collabRows = (sp.collaborators || []).map(c => `
    <div class="share-collab-row" data-perm-id="${escapeAttr(c.permissionId)}">
      <div class="share-collab-email">${escapeHtml(c.email)}</div>
      <div class="share-collab-controls">
        <div class="share-role-toggle" data-perm-id="${escapeAttr(c.permissionId)}" aria-label="Role">
          <button class="share-role-option${c.role === 'writer' ? ' active' : ''}" data-role="writer" ${isOwner ? '' : 'disabled'} type="button">Editor</button>
          <button class="share-role-option${c.role === 'reader' ? ' active' : ''}" data-role="reader" ${isOwner ? '' : 'disabled'} type="button">Viewer</button>
        </div>
        ${isOwner ? `<button class="btn-ghost share-collab-remove" data-perm-id="${escapeAttr(c.permissionId)}" type="button">Remove</button>` : ''}
      </div>
    </div>
  `).join('');

  body.innerHTML = `
    <div class="share-meta">
      <div class="share-meta-row">
        <span class="share-meta-label">Owner</span>
        <span class="share-owner">
          ${sp.ownerPicture
            ? `<img class="share-owner-avatar" src="${escapeAttr(sp.ownerPicture)}" alt="" referrerpolicy="no-referrer" />`
            : `<span class="share-owner-avatar share-owner-avatar-fallback">${escapeHtml(((sp.ownerName || sp.ownerEmail || '?')[0] || '?').toUpperCase())}</span>`}
          <span class="share-owner-text">
            <span class="share-owner-name">${escapeHtml(sp.ownerName || sp.ownerEmail || '—')}</span>
            ${sp.ownerName && sp.ownerEmail ? `<span class="share-owner-email">${escapeHtml(sp.ownerEmail)}</span>` : ''}
          </span>
        </span>
      </div>
      <div class="share-meta-row"><span class="share-meta-label">Your role</span><span class="share-role-badge share-role-${sp.myRole || 'reader'}">${escapeHtml(roleLabel(sp.myRole || 'reader'))}</span></div>
      ${pending ? `<div class="share-meta-row"><span class="share-meta-label">Pending</span><span>${pending} local change${pending === 1 ? '' : 's'} waiting to sync</span></div>` : ''}
      ${sp.lastSyncedAt ? `<div class="share-meta-row"><span class="share-meta-label">Last sync</span><span>${escapeHtml(new Date(sp.lastSyncedAt).toLocaleString())}</span></div>` : ''}
    </div>

    ${isOwner ? `
    <div class="share-add">
      <input type="email" id="share-add-email" placeholder="someone@gmail.com" autocomplete="off" />
      <div class="share-role-toggle share-add-role-toggle" id="share-add-role" aria-label="Invite role">
        <button class="share-role-option active" data-role="writer" type="button">Editor</button>
        <button class="share-role-option" data-role="reader" type="button">Viewer</button>
      </div>
      <button class="btn-primary" id="share-add-btn" type="button">Invite</button>
    </div>
    ` : ''}

    <div class="share-collab-list">
      <div class="share-collab-head"><span>Email</span><span>Role</span></div>
      ${collabRows || `<div class="share-collab-empty">No collaborators yet${isOwner ? ' - invite someone above.' : '.'}</div>`}
    </div>

    <div class="share-sync">
      <div class="share-sync-label">Sync</div>
      <div class="share-sync-buttons">
        <button class="btn-ghost" id="share-pull-btn" type="button">
          <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14M19 12l-7 7-7-7"/></svg>
          <span>Pull from Drive</span>
        </button>
        ${(sp.myRole === 'owner' || sp.myRole === 'writer') ? `
          <button class="btn-ghost" id="share-push-btn" type="button">
            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 19V5M5 12l7-7 7 7"/></svg>
            <span>Push current data</span>
          </button>
        ` : ''}
      </div>
    </div>

    <div class="share-activity">
      <div class="share-sync-label">Activity</div>
      ${activityRows || `<div class="share-collab-empty">No shared activity recorded on this device yet.</div>`}
    </div>

    ${status}${error}${conflict}

    <div class="modal-actions">
      ${isOwner ? `<button class="btn-ghost share-stop-btn" id="share-stop-btn" type="button">Stop sharing on this device</button>` : ''}
      <button class="btn-primary" data-close="modal-share-space">Done</button>
    </div>
  `;

  // Wire up
  document.getElementById('share-add-btn')?.addEventListener('click', addCollaboratorToCurrentSpace);
  document.getElementById('share-stop-btn')?.addEventListener('click', stopSharingCurrentSpace);
  document.getElementById('share-pull-btn')?.addEventListener('click', pullCurrentSharedSpace);
  document.getElementById('share-push-btn')?.addEventListener('click', pushCurrentSharedSpace);
  document.getElementById('share-conflict-pull')?.addEventListener('click', pullCurrentSharedSpace);
  document.getElementById('share-conflict-force')?.addEventListener('click', () => forcePushCurrentSharedSpace());
  // The global [data-close] listener only runs once at page load, so the
  // dynamically-rendered Done button never got wired. Bind it here.
  body.querySelectorAll('[data-close]').forEach(b => {
    b.addEventListener('click', () => closeModal(b.dataset.close));
  });
  body.querySelectorAll('.share-collab-remove').forEach(b => {
    b.addEventListener('click', () => removeCollaboratorFromCurrentSpace(b.dataset.permId));
  });
  body.querySelectorAll('.share-role-toggle').forEach(group => {
    group.querySelectorAll('.share-role-option').forEach(btn => {
      btn.addEventListener('click', () => {
        if (btn.disabled || btn.classList.contains('active')) return;
        group.querySelectorAll('.share-role-option').forEach(b => b.classList.toggle('active', b === btn));
        if (group.id === 'share-add-role') return;
        updateCollaboratorRoleForCurrentSpace(group.dataset.permId, btn.dataset.role);
      });
    });
  });
}

function roleLabel(role) {
  if (role === 'owner')  return 'Owner';
  if (role === 'writer') return 'Editor';
  if (role === 'reader') return 'Viewer';
  return role || '—';
}

async function enableSharingForCurrentSpace() {
  const sp = findSpace(_shareTargetSpaceId);
  if (!sp) return;
  const btn = document.getElementById('share-enable-btn');
  if (btn) { btn.disabled = true; btn.textContent = 'Sharing…'; }
  try {
    const r = await DriveAPI.createSharedSpaceFile(sp);
    sp.shared             = true;
    sp.driveFileId        = r.fileId;
    sp.ownerEmail         = r.ownerEmail;
    sp.ownerName          = r.ownerName    || null;
    sp.ownerPicture       = r.ownerPicture || null;
    sp.myRole             = 'owner';
    sp.collaborators      = [];
    sp.lastSyncedRevision = r.revisionId;
    sp.lastSyncedAt       = Date.now();
    save();
    renderSidebar();
    renderShareSpaceBody({ status: 'Shared. You can invite people now.' });
  } catch (e) {
    if (isDriveStorageQuotaError(e)) {
      renderShareSpaceBody({ error: driveStorageMessage() });
      await showDriveStorageAlert(e);
    } else {
      renderShareSpaceBody({ error: 'Could not share: ' + (e.message || 'unknown error') });
    }
  }
}

async function addCollaboratorToCurrentSpace() {
  const sp = findSpace(_shareTargetSpaceId);
  if (!sp || !sp.driveFileId) return;
  const emailEl = document.getElementById('share-add-email');
  const roleEl  = document.querySelector('#share-add-role .share-role-option.active');
  const email = (emailEl && emailEl.value || '').trim();
  const role  = (roleEl && roleEl.dataset.role) || 'writer';
  if (!email) { emailEl?.focus(); return; }
  const btn = document.getElementById('share-add-btn');
  if (btn) { btn.disabled = true; btn.textContent = 'Inviting…'; }
  try {
    const c = await DriveAPI.addCollaborator(sp.driveFileId, email, role);
    sp.collaborators = sp.collaborators || [];
    sp.collaborators.push({ permissionId: c.permissionId, email: c.email, role: c.role });
    save();
    renderShareSpaceBody({ status: `Invited ${email} as ${roleLabel(role)}.` });
  } catch (e) {
    renderShareSpaceBody({ error: 'Invite failed: ' + (e.message || 'unknown error') });
  }
}

async function removeCollaboratorFromCurrentSpace(permissionId) {
  const sp = findSpace(_shareTargetSpaceId);
  if (!sp || !sp.driveFileId) return;
  const c = (sp.collaborators || []).find(x => x.permissionId === permissionId);
  if (!c) return;
  if (!(await confirmDialog({
    title: 'Remove collaborator',
    message: `Remove ${c.email} from this Space?`,
    okText: 'Remove',
    danger: true,
  }))) return;
  try {
    await DriveAPI.removeCollaborator(sp.driveFileId, permissionId);
    sp.collaborators = (sp.collaborators || []).filter(x => x.permissionId !== permissionId);
    save();
    renderShareSpaceBody({ status: `Removed ${c.email}.` });
  } catch (e) {
    renderShareSpaceBody({ error: 'Could not remove: ' + (e.message || 'unknown error') });
  }
}

async function updateCollaboratorRoleForCurrentSpace(permissionId, newRole) {
  const sp = findSpace(_shareTargetSpaceId);
  if (!sp || !sp.driveFileId) return;
  try {
    const c = await DriveAPI.updateCollaboratorRole(sp.driveFileId, permissionId, newRole);
    const target = (sp.collaborators || []).find(x => x.permissionId === permissionId);
    if (target) target.role = c.role;
    save();
    renderShareSpaceBody({ status: `Role updated to ${roleLabel(newRole)}.` });
  } catch (e) {
    renderShareSpaceBody({ error: 'Could not update role: ' + (e.message || 'unknown error') });
  }
}

async function pullCurrentSharedSpace() {
  const sp = findSpace(_shareTargetSpaceId);
  if (!sp || !sp.driveFileId) return;
  const btn = document.getElementById('share-pull-btn');
  if (btn) { btn.disabled = true; const lbl = btn.querySelector('span'); if (lbl) lbl.textContent = 'Pulling…'; }
  try {
    setSyncHealth(sp.id, 'syncing', 'Pulling latest changes.');
    const r = await DriveAPI.pullSpaceFile(sp.driveFileId);
    if (!r.payload || !r.payload.space) {
      renderShareSpaceBody({ error: 'Remote file is missing or in an unknown format.' });
      return;
    }
    // Preserve local collaborators array (owner-only data, not in payload)
    const savedCollabs = sp.collaborators || [];
    mergeImportedSpacePayload(r);
    const updated = findSpace(sp.id);
    if (updated) updated.collaborators = savedCollabs;
    save();
    if (typeof renderHome === 'function') renderHome();
    if (typeof renderSidebar === 'function') renderSidebar();
    if (typeof renderRobotList === 'function') renderRobotList();
    if (typeof renderRobotDetail === 'function') renderRobotDetail();
    clearSyncHealth(sp.id);
    clearPendingSync(sp.id);
    renderShareSpaceBody({ status: 'Pulled latest from Drive (' + payloadCountsFromPayload(r.payload) + ').' });
  } catch (e) {
    setSyncHealth(sp.id, navigator.onLine === false ? 'offline' : 'pull-needed', 'Pull failed.');
    renderShareSpaceBody({ error: 'Pull failed: ' + (e && e.message || 'unknown error') });
  }
}

async function pushCurrentSharedSpace() {
  const sp = findSpace(_shareTargetSpaceId);
  if (!sp || !sp.driveFileId) return;
  const btn = document.getElementById('share-push-btn');
  if (btn) { btn.disabled = true; const lbl = btn.querySelector('span'); if (lbl) lbl.textContent = 'Pushing…'; }
  try {
    setSyncHealth(sp.id, 'syncing', 'Pushing local changes.');
    const r = await DriveAPI.pushSpaceFile(sp.driveFileId, sp, sp.lastSyncedRevision);
    sp.lastSyncedRevision = r.revisionId;
    sp.lastSyncedAt       = Date.now();
    clearSyncHealth(sp.id);
    clearPendingSync(sp.id);
    save();
    renderShareSpaceBody({ status: 'Pushed current data to Drive (' + payloadCounts(sp) + ').' });
  } catch (e) {
    if (e && e.conflict) {
      setSyncHealth(sp.id, 'conflict', 'Someone else updated this Space. Pull first.');
      renderShareSpaceBody({ error: 'Someone else has updated this Space on Drive.', conflict: true });
    } else {
      setSyncHealth(sp.id, navigator.onLine === false ? 'offline' : 'pull-needed', 'Push failed.');
      if (isDriveStorageQuotaError(e)) {
        renderShareSpaceBody({ error: driveStorageMessage() });
        await showDriveStorageAlert(e);
      } else {
        renderShareSpaceBody({ error: 'Push failed: ' + (e && e.message || 'unknown error') });
      }
    }
  }
}

async function forcePushCurrentSharedSpace() {
  const sp = findSpace(_shareTargetSpaceId);
  if (!sp || !sp.driveFileId) return;
  const ok = await confirmDialog({
    title: 'Overwrite Drive?',
    message: 'This sends your current local Space to Drive and can overwrite newer collaborator changes. Continue?',
    okText: 'Overwrite Drive',
    danger: true,
  });
  if (!ok) return;
  try {
    setSyncHealth(sp.id, 'syncing', 'Overwriting Drive with local changes.');
    const r = await DriveAPI.pushSpaceFile(sp.driveFileId, sp, null);
    sp.lastSyncedRevision = r.revisionId;
    sp.lastSyncedAt = Date.now();
    clearSyncHealth(sp.id);
    clearPendingSync(sp.id);
    save();
    renderShareSpaceBody({ status: 'Drive overwritten with current local data.' });
  } catch (e) {
    setSyncHealth(sp.id, navigator.onLine === false ? 'offline' : 'pull-needed', 'Force push failed.');
    renderShareSpaceBody({ error: 'Force push failed: ' + (e && e.message || 'unknown error') });
  }
}

async function stopSharingCurrentSpace() {
  const sp = findSpace(_shareTargetSpaceId);
  if (!sp) return;
  if (!(await confirmDialog({
    title: 'Stop syncing on this device',
    message: 'The Drive file and collaborator invitations stay — you can re-link it later. Other people who already have access keep their access.',
    okText: 'Stop syncing',
    danger: true,
  }))) return;
  sp.shared             = false;
  sp.driveFileId        = undefined;
  sp.ownerEmail         = undefined;
  sp.myRole             = undefined;
  sp.collaborators      = [];
  sp.lastSyncedRevision = undefined;
  sp.lastSyncedAt       = undefined;
  save();
  renderSidebar();
  renderShareSpaceBody({ status: 'Stopped syncing on this device.' });
}

// ──────────────────────────────────────────────────────────
// SHARED SPACES — Discovery & Import
//
// On Drive sign-in (and on demand) we list every file tagged with our
// appProperties marker. Files we created that already live in state are
// skipped. Whatever's left is presented in a "Shared with you" sidebar
// section with an Import button. Importing pulls the file and merges
// its embedded entities (robots / meetings / visits) into local state.
// ──────────────────────────────────────────────────────────

let _pendingShares = []; // [{ fileId, name, ownerEmail, myRole, modifiedTime }]

// Walk every imported shared Space and force a pull so name / items /
// owner info stay in sync even when the user isn't actively viewing
// a list. Throttled by maybeAutoPull's own guards (PULL_FRESHNESS_MS
// + in-flight set + pending-push guard) so cheap to call frequently.
async function refreshAllSharedSpaces() {
  if (!DriveAPI || !DriveAPI.isSignedIn || !DriveAPI.isSignedIn()) return;
  const shared = (state.spaces || []).filter(s => s.shared && s.driveFileId);
  for (const sp of shared) {
    // force=true so freshness gate doesn't skip when invoked
    // explicitly (boot / visibilitychange / discovery refresh).
    if (typeof maybeAutoPull === 'function') {
      // Don't await — fire in parallel; UI updates as each lands.
      maybeAutoPull(sp.id, true);
    }
  }
}

async function refreshPendingShares() {
  if (!DriveAPI || !DriveAPI.isSignedIn || !DriveAPI.isSignedIn()) {
    _pendingShares = [];
    return _pendingShares;
  }
  try {
    const list = await DriveAPI.listAccessibleSharedSpaces();
    const knownIds = new Set((state.spaces || []).map(s => s.driveFileId).filter(Boolean));
    // Skip:
    //   - files we've already imported (by driveFileId)
    //   - files we own (those are *our* shares; "Shared with you" should
    //     only surface things other accounts have shared with us)
    _pendingShares = list.filter(f => !knownIds.has(f.fileId) && f.myRole !== 'owner');
  } catch {
    _pendingShares = [];
  }
  if (typeof renderHome === 'function') renderHome();
  return _pendingShares;
}

async function importSharedSpace(fileId) {
  if (!DriveAPI || !DriveAPI.isSignedIn || !DriveAPI.isSignedIn()) {
    alertDialog({ title: 'Sign in required', message: 'Sign in to Google Drive first (avatar at top-right).' });
    return;
  }
  try {
    const r = await DriveAPI.pullSpaceFile(fileId);
    if (!r.payload || !r.payload.space) {
      alertDialog({ title: 'Invalid file', message: 'This file does not look like a B-Less shared space.' });
      return;
    }
    mergeImportedSpacePayload(r);
    save();
    _pendingShares = _pendingShares.filter(p => p.fileId !== fileId);
    if (typeof renderHome === 'function') renderHome();
    if (typeof renderSidebar === 'function') renderSidebar();
  } catch (e) {
    alertDialog({ title: 'Import failed', message: 'Could not import: ' + (e && e.message || 'unknown error') });
  }
}

// Apply a freshly-pulled shared-space payload into local state. Idempotent:
// re-running with newer data replaces existing entities in-place.
// Per-id smart merge — keeps both sides' new additions, picks the newer
// of overlapping items by updatedAt. Avoids the data-loss the previous
// "replace whole space" behaviour caused when two users edited at once.
function mergeImportedSpacePayload(pull) {
  const p = pull.payload;
  const space = p.space || {};
  state.robots      = state.robots      || [];
  state.meetings    = state.meetings    || [];
  state.fieldVisits = state.fieldVisits || [];

  const stats = { localKept: 0, remoteAdded: 0, overlap: 0, localSuperseded: 0, remoteSuperseded: 0 };
  const existingSpace = (state.spaces || []).find(s => s.id === space.id);
  const meInfo = (typeof DriveAPI !== 'undefined' && DriveAPI.getUserInfo && DriveAPI.getUserInfo()) || null;
  const myEmail = (meInfo && meInfo.email) ? meInfo.email.toLowerCase() : null;
  const updatedBy = (p.updatedBy || '').toLowerCase();
  const shouldRecordActivity = !!(existingSpace && existingSpace.driveFileId && updatedBy && updatedBy !== myEmail);

  function recordTaskActivity(kind, robot, task, detailId) {
    if (!shouldRecordActivity || !robot || !task) return;
    addSharedActivity({
      id: ['shared', space.id, robot.id, task.id, kind, detailId || task.updatedAt || task.createdAt || Date.now()].join(':'),
      kind,
      spaceId: space.id,
      spaceName: space.name || (existingSpace && existingSpace.name) || 'Shared Space',
      projectId: robot.id,
      projectName: robot.name || 'List',
      taskId: task.id,
      taskTitle: task.title || 'Task',
      actorEmail: p.updatedBy || '',
      createdAt: Date.now(),
    });
  }

  // Tasks inside a robot — merge per-id, newer updatedAt wins.
  function mergeTasks(localRobot, remoteRobot) {
    const localById  = new Map((localRobot.tasks  || []).map(t => [t.id, t]));
    const remoteById = new Map((remoteRobot.tasks || []).map(t => [t.id, t]));
    const out = [];
    const seen = new Set();
    // First pass: walk remote in order. For each remote task, pick newer.
    (remoteRobot.tasks || []).forEach(rt => {
      const lt = localById.get(rt.id);
      if (!lt) {
        out.push(rt);
        stats.remoteAdded++;
        recordTaskActivity('task-added', remoteRobot, rt, rt.id);
      } else {
        const lUpd = lt.updatedAt || 0;
        const rUpd = rt.updatedAt || 0;
        if (rUpd > lUpd) {
          const localNotes = new Set((lt.notebook || []).map(n => n && n.id));
          const localSubs = new Set((lt.subtasks || []).map(s => s && s.id));
          (rt.notebook || []).forEach(n => {
            if (n && n.id && !localNotes.has(n.id)) recordTaskActivity('note-added', remoteRobot, rt, n.id);
          });
          (rt.subtasks || []).forEach(s => {
            if (s && s.id && !localSubs.has(s.id)) recordTaskActivity('subtask-added', remoteRobot, rt, s.id);
          });
          // Remote wins on data, but UI-only fields (expanded) belong to
          // this device — copy them from the local version so the merge
          // doesn't collapse a task the user just opened.
          out.push(Object.assign({}, rt, { expanded: !!lt.expanded }));
          if (lUpd > 0) stats.localSuperseded++;
        }
        else if (lUpd > rUpd) { out.push(lt); stats.remoteSuperseded++; }
        else { out.push(lt); }
        stats.overlap++;
      }
      seen.add(rt.id);
    });
    // Second pass: local-only tasks (newer adds not yet on remote) preserved,
    // UNLESS the remote explicitly tombstoned the task (intentional deletion).
    const remoteTombstones = new Set(remoteRobot.deletedTaskIds || []);
    (localRobot.tasks || []).forEach(lt => {
      if (!seen.has(lt.id)) {
        if (remoteTombstones.has(lt.id)) {
          // Collaborator deleted this task — honour their deletion, don't resurrect.
          return;
        }
        out.push(lt);
        stats.localKept++;
      }
    });
    return out;
  }

  // Robots — by-id merge with task-level merge inside overlaps.
  (p.robots || []).forEach(rr => {
    const idx = state.robots.findIndex(x => x.id === rr.id);
    if (idx < 0) {
      state.robots.push(rr);
      return;
    }
    const lr = state.robots[idx];
    const lUpd = lr.updatedAt || 0;
    const rUpd = rr.updatedAt || 0;
    const tasks = mergeTasks(lr, rr);
    // For top-level fields (name/description/category) keep the newer one,
    // but always run the task merge so per-task changes survive even if
    // the parent timestamps clash.
    const head = rUpd >= lUpd
      ? { name: rr.name, description: rr.description, category: rr.category, mode: rr.mode || lr.mode, updatedAt: rUpd || Date.now() }
      : { name: lr.name, description: lr.description, category: lr.category, mode: lr.mode, updatedAt: lUpd };
    // Preserve issues list with the newer parent — we don't merge issues
    // per-id yet because the UI rarely uses them now.
    const issues = rUpd >= lUpd ? (rr.issues || []) : (lr.issues || []);
    // Merge tombstone lists as a union so deletions from either side survive.
    const mergedTombstones = Array.from(new Set([
      ...(lr.deletedTaskIds || []),
      ...(rr.deletedTaskIds || []),
    ]));
    state.robots[idx] = Object.assign({}, lr, head, { tasks, issues, deletedTaskIds: mergedTombstones });
  });

  // Meetings & visits are personal/global — never imported from a
  // shared space payload. (Older builds shipped them; we ignore those
  // sections to avoid leaking another user's meetings onto this device.)

  // Space header + items list — items are merged as a union by item id
  // so both sides' additions stay; the Space's renameable fields take
  // the remote value because Drive is the source of truth for those.
  const sIdx = (state.spaces || []).findIndex(s => s.id === space.id);
  const prev = sIdx >= 0 ? state.spaces[sIdx] : {};
  const itemsById = new Map();
  (prev.items || []).forEach(it => itemsById.set(it.id, it));
  (space.items || []).forEach(it => {
    if (!itemsById.has(it.id)) itemsById.set(it.id, it);
  });
  const mergedItems = Array.from(itemsById.values());
  // Drop dead references — items pointing at robots/meetings/visits we
  // don't have. (Defensive — shouldn't happen with self-contained payloads.)
  const liveLists    = new Set(state.robots.map(r => r.id));
  const liveMeetings = new Set(state.meetings.map(m => m.id));
  const liveVisits   = new Set(state.fieldVisits.map(v => v.id));
  const filteredItems = mergedItems.filter(it => {
    if (it.type === 'list')    return liveLists.has(it.refId);
    if (it.type === 'meeting') return liveMeetings.has(it.refId);
    if (it.type === 'visit')   return liveVisits.has(it.refId);
    return true; // unknown/singleton item types keep
  });

  // space.members carries the safe (no permissionId) member list the owner
  // published. Store it so collaborators can populate the assignee dropdown.
  // Owner keeps their own collaborators array (with permissionIds) untouched.
  const payloadMembers = Array.isArray(space.members) ? space.members : null;

  const merged = {
    id:   space.id,
    name: space.name,
    items: filteredItems,
    shared: true,
    driveFileId:        pull.fileId,
    ownerEmail:         pull.ownerEmail   || p.ownerEmail   || prev.ownerEmail   || null,
    ownerName:          pull.ownerName    || prev.ownerName || null,
    ownerPicture:       pull.ownerPicture || prev.ownerPicture || null,
    myRole:             pull.myRole || 'reader',
    collaborators:      prev.collaborators || [],
    // Safe member list from payload — always overwrite so additions/removals propagate.
    members:            payloadMembers || prev.members || [],
    lastSyncedRevision: pull.revisionId,
    lastSyncedAt:       Date.now(),
  };
  if (sIdx >= 0) state.spaces[sIdx] = merged;
  else state.spaces.push(merged);

  // Merge shared space goals pool — union by goal id, newer updatedAt wins,
  // contributors arrays are unioned so both sides' names survive.
  if (p.spaceGoals && typeof p.spaceGoals === 'object') {
    if (!state.spaceGoals) state.spaceGoals = {};
    if (!state.spaceGoals[space.id]) state.spaceGoals[space.id] = {};

    // Helper: return contributors array, bootstrapping from addedBy for legacy entries.
    const getContribs = g => {
      if (Array.isArray(g.contributors) && g.contributors.length > 0) return g.contributors;
      return g.addedBy ? [{ email: g.addedBy, name: g.addedByName || null }] : [];
    };
    // Helper: union two contributors arrays, deduplicating by email.
    const unionContribs = (a, b) => {
      const seen = new Set();
      return [...a, ...b].filter(c => {
        if (!c.email) return false;
        const k = c.email.toLowerCase();
        if (seen.has(k)) return false;
        seen.add(k);
        return true;
      });
    };

    for (const [weekKey, remoteGoals] of Object.entries(p.spaceGoals)) {
      if (!Array.isArray(remoteGoals)) continue;
      const localGoals = state.spaceGoals[space.id][weekKey] || [];
      const byId = new Map(localGoals.map(g => [g.id, g]));
      for (const rg of remoteGoals) {
        const lg = byId.get(rg.id);
        if (!lg) {
          byId.set(rg.id, rg);
        } else {
          // Merge: newer updatedAt wins for top-level fields, but always union contributors
          // (including legacy entries that stored only addedBy instead of contributors[]).
          const winner = (rg.updatedAt || 0) >= (lg.updatedAt || 0) ? { ...rg } : { ...lg };
          winner.contributors = unionContribs(getContribs(lg), getContribs(rg));
          byId.set(rg.id, winner);
        }
      }

      // Deduplicate entries with the same taskId (both not deleted) — can happen
      // when two users goal the same task independently before syncing.
      // Keep the older entry (canonical), union its contributors, soft-delete the dupe.
      const byTaskId = new Map();
      const all = Array.from(byId.values());
      for (const g of all) {
        if (!g.taskId || g.deleted) continue;
        const prev = byTaskId.get(g.taskId);
        if (!prev) { byTaskId.set(g.taskId, g); continue; }
        // Two active entries for same task — merge into the older one
        const canon = (prev.createdAt || 0) <= (g.createdAt || 0) ? prev : g;
        const dupe  = canon === prev ? g : prev;
        canon.contributors = unionContribs(getContribs(canon), getContribs(dupe));
        canon.updatedAt = Math.max(canon.updatedAt || 0, dupe.updatedAt || 0);
        if (dupe.done) canon.done = true;
        // Soft-delete the duplicate so it doesn't come back from Drive
        byId.set(dupe.id, { ...dupe, deleted: true, updatedAt: Date.now() });
        byTaskId.set(g.taskId, canon);
      }

      state.spaceGoals[space.id][weekKey] = Array.from(byId.values());
    }
  }

  // Surface a toast if the merge involved any cross-edit so the user
  // knows their session was synced with someone else's changes.
  if (stats.localKept > 0 || stats.remoteAdded > 0 || stats.localSuperseded > 0) {
    showSyncToast(stats, merged.name);
  }
}

// Wire discovery to Drive sign-in: when fetchUserInfo lands a fresh user,
// refresh the pending-shares list so the sidebar can offer imports.
const _prevOnDriveUserChange = window.onDriveUserChange;
window.onDriveUserChange = function(userInfo) {
  try { if (typeof _prevOnDriveUserChange === 'function') _prevOnDriveUserChange(userInfo); } catch {}
  if (userInfo) {
    // Fire-and-forget — the sidebar will re-render once shares land.
    refreshPendingShares();
    // Pull the latest snapshot for every already-imported shared
    // Space so renames + edits from collaborators land on next paint
    // (the per-list 30 s poll only runs while a list is in focus).
    refreshAllSharedSpaces();
  } else {
    _pendingShares = [];
    if (typeof renderHome === 'function') renderHome();
  }
};

// When the user comes back to the tab after switching away, refresh
// all imported shared Spaces. Catches owner renames + collaborator
// edits that landed while we were in the background.
document.addEventListener('visibilitychange', () => {
  if (document.visibilityState === 'visible') {
    refreshAllSharedSpaces();
  }
});

// ──────────────────────────────────────────────────────────
// SHARED SPACES — Phase 5: Auto-sync
//
//   - Auto-pull on open: when a shared list/space comes into focus,
//     and lastSyncedAt is stale, fetch the latest from Drive.
//   - Polling: while a shared list is open, refresh every 30s.
//   - Auto-push (editor+): a save() hook schedules a debounced push
//     per shared writable Space. Conflicts trigger one pull-merge-retry.
//   - "Synced Nm ago" indicator: small text in the sidebar Space row.
// ──────────────────────────────────────────────────────────

// Constants referenced from functions called during boot — same TDZ
// trap as the `let` globals above. Use `var` so they're hoisted.
var PUSH_DEBOUNCE_MS = 1500;
var PULL_FRESHNESS_MS = 8000;
var POLL_INTERVAL_MS  = 30000;
// These globals are touched by renderRobotDetail, which can run very
// early (applyI18n → renderAll at boot). `let` puts them in the
// temporal-dead-zone until script execution reaches this line and
// crashes the boot — use `var` so they're hoisted as `undefined`.
var _pendingPushes = new Map(); // spaceId -> setTimeout handle
var _autoPullInFlight = new Set(); // spaceId currently pulling
var _spacePollTimer = null;
var _polledSpaceId  = null;
var _syncHealth = new Map(); // spaceId -> { status, message, at }

function setSyncHealth(spaceId, status, message) {
  if (!spaceId) return;
  if (!_syncHealth) _syncHealth = new Map();
  _syncHealth.set(spaceId, { status, message: message || '', at: Date.now() });
  if (typeof renderHome === 'function') renderHome();
}

function clearSyncHealth(spaceId) {
  if (!spaceId) return;
  if (!_syncHealth) _syncHealth = new Map();
  const cur = _syncHealth.get(spaceId);
  if (cur && cur.status !== 'ok') _syncHealth.delete(spaceId);
  if (typeof renderHome === 'function') renderHome();
}

function getSyncHealth(sp) {
  if (!sp || !sp.shared) return null;
  if (typeof navigator !== 'undefined' && navigator.onLine === false) {
    return { status: 'offline', label: 'Offline', title: 'Offline - sync will resume when you reconnect.' };
  }
  if (!_syncHealth) _syncHealth = new Map();
  const cur = _syncHealth.get(sp.id);
  if (cur && cur.status === 'syncing') return { status: 'syncing', label: 'Syncing', title: cur.message || 'Syncing with Drive.' };
  if (cur && cur.status === 'conflict') return { status: 'conflict', label: 'Conflict', title: cur.message || 'Someone else changed this Space. Pull first.' };
  if (cur && cur.status === 'pull-needed') return { status: 'pull-needed', label: 'Pull needed', title: cur.message || 'Remote changes are waiting. Pull latest.' };
  if (!sp.lastSyncedAt) return { status: 'pull-needed', label: 'Not synced', title: 'This Space has not synced on this device yet.' };
  return { status: 'ok', label: formatSyncedAgo(sp.lastSyncedAt), title: new Date(sp.lastSyncedAt).toLocaleString() };
}

function renderSyncHealthChip(sp) {
  const h = getSyncHealth(sp);
  if (!h) return '';
  return `<span class="sync-health-chip sync-${escapeAttr(h.status)}" title="${escapeAttr(h.title)}">${escapeHtml(h.label)}</span>`;
}

window.addEventListener('online', () => {
  if (typeof renderHome === 'function') renderHome();
  if (typeof refreshAllSharedSpaces === 'function') refreshAllSharedSpaces();
});
window.addEventListener('offline', () => {
  if (typeof renderHome === 'function') renderHome();
});

function _canPush(sp) {
  return sp && sp.shared && sp.driveFileId && (sp.myRole === 'owner' || sp.myRole === 'writer');
}

function _canPull(sp) {
  return sp && sp.shared && sp.driveFileId;
}

function schedulePush(spaceId) {
  // Bail if module-level constants haven't been initialised yet (boot
  // calls can reach this before script execution passes the var inits).
  if (typeof PUSH_DEBOUNCE_MS !== 'number') return;
  if (!DriveAPI || !DriveAPI.isSignedIn || !DriveAPI.isSignedIn()) return;
  const existing = _pendingPushes.get(spaceId);
  if (existing) clearTimeout(existing);
  markPendingSync(spaceId, 'Local Space edit');
  setSyncHealth(spaceId, 'syncing', 'Waiting to push local changes.');
  const t = setTimeout(() => { doAutoPush(spaceId); }, PUSH_DEBOUNCE_MS);
  _pendingPushes.set(spaceId, t);
}

async function doAutoPush(spaceId) {
  _pendingPushes.delete(spaceId);
  const sp = findSpace(spaceId);
  if (!_canPush(sp)) return;
  try {
    setSyncHealth(spaceId, 'syncing', 'Pushing local changes.');
    // Always pull → merge → push so no collaborator's data is overwritten.
    // The extra Drive read is cheap compared to data loss from last-write-wins.
    const pr = await DriveAPI.pullSpaceFile(sp.driveFileId);
    if (pr && pr.payload && pr.payload.space) {
      const savedCollabs = sp.collaborators || [];
      mergeImportedSpacePayload(pr);
      const updated = findSpace(spaceId);
      if (updated) updated.collaborators = savedCollabs;
    }
    const fresh = findSpace(spaceId);
    if (!fresh) return;
    const r = await DriveAPI.pushSpaceFile(fresh.driveFileId, fresh, null);
    fresh.lastSyncedRevision = r.revisionId;
    fresh.lastSyncedAt       = Date.now();
    clearSyncHealth(spaceId);
    clearPendingSync(spaceId);
    // Persist without re-firing save() to avoid push loop.
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); } catch {}
    if (typeof refreshInboxBadge === 'function') refreshInboxBadge();
    if (typeof renderHome === 'function') renderHome();
    if (typeof renderReviews === 'function') renderReviews();
  } catch (err) {
    setSyncHealth(
      spaceId,
      navigator.onLine === false ? 'offline' : 'pull-needed',
      isDriveStorageQuotaError(err) ? driveStorageMessage() : 'Auto-sync could not finish. Pull latest and try again.'
    );
    if (isDriveStorageQuotaError(err) && typeof showAppToast === 'function') showAppToast(driveStorageMessage(), 'error');
    // Transient error — next debounced push will retry.
  }
}

// Returns true if the user is actively typing into an input / textarea
// / contenteditable. Used by auto-pull to defer re-renders that would
// otherwise wipe an in-progress note or subtask draft.
function _userIsTyping() {
  const ae = document.activeElement;
  if (!ae) return false;
  const tag = ae.tagName;
  if (tag === 'INPUT' || tag === 'TEXTAREA') return true;
  if (ae.isContentEditable) return true;
  return false;
}

async function maybeAutoPull(spaceId, force) {
  if (typeof PULL_FRESHNESS_MS !== 'number') return;
  const sp = findSpace(spaceId);
  if (!_canPull(sp)) return;
  if (!DriveAPI || !DriveAPI.isSignedIn || !DriveAPI.isSignedIn()) return;
  // Don't clobber pending local edits the debounced push will handle.
  if (_pendingPushes.has(spaceId)) return;
  if (_autoPullInFlight.has(spaceId)) return;
  if (!force && sp.lastSyncedAt && (Date.now() - sp.lastSyncedAt) < PULL_FRESHNESS_MS) return;
  // While the user is mid-typing, skip the whole pull. Re-rendering the
  // task detail (which is what wipes draft notes) is unavoidable on a
  // merge, so the cleanest defence is not to merge while they're
  // writing. The next poll tick — or the user's own save() — will pull.
  if (_userIsTyping()) return;
  _autoPullInFlight.add(spaceId);
  try {
    setSyncHealth(spaceId, 'syncing', 'Pulling latest changes.');
    const r = await DriveAPI.pullSpaceFile(sp.driveFileId);
    if (r && r.payload && r.payload.space) {
      const savedCollabs = sp.collaborators || [];
      mergeImportedSpacePayload(r);
      const updated = findSpace(sp.id);
      if (updated) updated.collaborators = savedCollabs;
      // Persist new revisionId/lastSyncedAt without re-firing the save()
      // wrapper chain — going through save() would schedule another push
      // and loop.
      try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); } catch {}
      if (typeof refreshInboxBadge === 'function') refreshInboxBadge();
      // Defensive: if focus has shifted INTO an input between the
      // freshness gate above and the response landing, skip rendering
      // so we don't trash that input either. Data is already merged;
      // the next interaction will pick it up.
      if (_userIsTyping()) return;
      if (typeof renderHome === 'function') renderHome();
      if (typeof renderRobotList === 'function') renderRobotList();
      if (typeof renderRobotDetail === 'function') renderRobotDetail();
      if (typeof renderReviews === 'function') renderReviews();
      clearSyncHealth(spaceId);
    }
  } catch {
    setSyncHealth(spaceId, navigator.onLine === false ? 'offline' : 'pull-needed', 'Could not pull latest changes.');
    // Silent — manual Pull button is still there if user wants visibility.
  } finally {
    _autoPullInFlight.delete(spaceId);
  }
}

function startSpacePoll(spaceId) {
  // Bail if module-level constants haven't initialised yet (boot can
  // reach this before script execution passes the var inits).
  if (typeof POLL_INTERVAL_MS !== 'number') return;
  if (_polledSpaceId === spaceId && _spacePollTimer) return;
  stopSpacePoll();
  _polledSpaceId = spaceId;
  _spacePollTimer = setInterval(() => {
    maybeAutoPull(spaceId, /*force*/ true);
  }, POLL_INTERVAL_MS);
}
function stopSpacePoll() {
  if (_spacePollTimer) { clearInterval(_spacePollTimer); _spacePollTimer = null; }
  _polledSpaceId = null;
}

// Hook save() — schedule a debounced push for every shared writable Space
// after each local mutation. Wraps whatever save() currently is so prior
// hooks (BackupManager, pendingItemAttach) keep working.
(function hookSaveForSharedPush() {
  const prior = save;
  save = function() {
    prior.apply(this, arguments);
    if (!DriveAPI || !DriveAPI.isSignedIn || !DriveAPI.isSignedIn()) return;
    (state.spaces || []).forEach(sp => {
      if (_canPush(sp)) schedulePush(sp.id);
    });
  };
})();

// "Synced Nm ago" formatter, used in renderHome
function formatSyncedAgo(ts) {
  if (!ts) return 'never synced';
  const diff = Math.floor((Date.now() - ts) / 1000);
  if (diff < 5)    return 'synced just now';
  if (diff < 60)   return `synced ${diff}s ago`;
  if (diff < 3600) return `synced ${Math.floor(diff/60)}m ago`;
  if (diff < 86400) return `synced ${Math.floor(diff/3600)}h ago`;
  return `synced ${Math.floor(diff/86400)}d ago`;
}
// If we're already signed in at load time, kick off a discovery pass
// + refresh every imported shared Space so renames + edits made while
// the tab wasn't running land on first paint.
setTimeout(() => {
  if (typeof DriveAPI !== 'undefined' && DriveAPI.isSignedIn && DriveAPI.isSignedIn()) {
    refreshPendingShares();
    refreshAllSharedSpaces();
  }
}, 1500);

// ── Cross-space top nav (Today / Calendar / All Tasks) ──
function showCrossView(name) {
  state.currentItemId = null;
  if (name === 'today' || name === 'all-tasks') {
    activateSection('all-tasks');
    if (typeof renderAllTasks === 'function') renderAllTasks();
  } else if (name === 'calendar') {
    activateSection('calendar');
    if (typeof renderCalendar === 'function') renderCalendar();
  } else if (name === 'visits') {
    activateSection('field-visits');
    if (typeof renderVisits === 'function') renderVisits();
  }
  document.querySelectorAll('.cross-nav-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.cross === name);
  });
  setBottomNavActive(name);
  closeSpaceDrawer();
  renderSidebar();
}
document.querySelectorAll('.cross-nav-btn').forEach(b => {
  b.addEventListener('click', () => showCrossView(b.dataset.cross));
});

// ── Quick notes: always-on right-rail scratchpad (Drive-synced) ──────
const QuickNotesStore = (() => {
  const KEY = 'b-less.quicknotes';
  const META_KEY = 'b-less.quicknotes.updatedAt';
  function get() { try { return localStorage.getItem(KEY) || ''; } catch { return ''; } }
  function updatedAt() {
    try { return parseInt(localStorage.getItem(META_KEY) || '0', 10) || 0; } catch { return 0; }
  }
  function set(text, ts) {
    const stamp = Number.isFinite(ts) && ts > 0 ? ts : Date.now();
    try { localStorage.setItem(KEY, String(text == null ? '' : text)); } catch {}
    try { localStorage.setItem(META_KEY, String(stamp)); } catch {}
    return stamp;
  }
  function save(text) {
    set(text);
    if (typeof BackupManager !== 'undefined' && BackupManager.onDataChange) BackupManager.onDataChange();
  }
  function snapshot() {
    return { text: get(), updatedAt: updatedAt() };
  }
  function normalizeRemote(remote) {
    if (typeof remote === 'string') return { text: remote, updatedAt: 0 };
    if (remote && typeof remote === 'object') {
      return {
        text: String(remote.text == null ? '' : remote.text),
        updatedAt: parseInt(remote.updatedAt || '0', 10) || 0,
      };
    }
    return null;
  }
  function applyRemote(remote) {
    const incoming = normalizeRemote(remote);
    if (!incoming) return false;
    const localText = get();
    const localUpdatedAt = updatedAt();
    const remoteIsNewer = incoming.updatedAt > localUpdatedAt;
    const legacyRemoteCanSeed = incoming.updatedAt === 0 && localUpdatedAt === 0 && !localText;
    if (!remoteIsNewer && !legacyRemoteCanSeed) return false;
    set(incoming.text, incoming.updatedAt || Date.now());
    return true;
  }
  return { get, updatedAt, set, save, snapshot, applyRemote };
})();

let _quickNotesSaveTimer = null;
function renderQuickNotes() {
  const area = document.getElementById('quick-notes-area');
  if (!area) return;
  // Don't clobber what the user is actively typing.
  if (document.activeElement !== area) area.value = QuickNotesStore.get();
}
function initQuickNotes() {
  const area = document.getElementById('quick-notes-area');
  if (!area || area.dataset.bound === '1') return;
  area.dataset.bound = '1';
  area.value = QuickNotesStore.get();
  const saved = document.getElementById('quick-notes-saved');
  area.addEventListener('input', () => {
    if (saved) saved.textContent = 'Saving…';
    QuickNotesStore.set(area.value);
    clearTimeout(_quickNotesSaveTimer);
    _quickNotesSaveTimer = setTimeout(() => {
      if (typeof BackupManager !== 'undefined' && BackupManager.onDataChange) BackupManager.onDataChange();
      if (saved) {
        saved.textContent = 'Saved';
        setTimeout(() => { if (saved.textContent === 'Saved') saved.textContent = ''; }, 1500);
      }
    }, 500);
  });
}

// ── Init ──
migrateToSpaces();
ensureCurrentReviewPeriods({ persist: true });
seedSampleData(); // self-gates on state.onboarded + empty data
renderSidebar();

// Re-render sidebar whenever data changes. Also re-run the (idempotent)
// migration so legacy entities restored from a backup get attached to a space.
const _origRenderAll = renderAll;
renderAll = function() {
  migrateToSpaces();
  _origRenderAll.apply(this, arguments);
  renderSidebar();
};

renderAll();
refreshInboxBadge();
renderPendingSyncIndicator();
setInterval(refreshInboxBadge, 60_000);
enhanceNoteTextareas();
initQuickNotes();
initAutoGrowingTextareas();
new MutationObserver(mutations => {
  for (const m of mutations) {
    m.addedNodes.forEach(node => {
      if (node && node.nodeType === 1) {
        enhanceNoteTextareas(node);
        if (node.tagName === 'TEXTAREA') window.autoSizeTextarea(node);
        else if (node.querySelectorAll) autoSizeTextareas(node);
      }
    });
  }
}).observe(document.body, { childList: true, subtree: true });
BackupManager.initUI();
BackupManager.init();
document.getElementById('export-ics-btn')?.addEventListener('click', downloadIcs);
document.getElementById('cal-export-ics')?.addEventListener('click', downloadIcs);

// Home grid: pill button + the colorful card row each navigate somewhere.
function setBnavActiveFor(id) {
  document.querySelectorAll('.bnav-btn').forEach(b => b.classList.remove('active'));
  if (id === 'home') document.getElementById('bnav-home-btn')?.classList.add('active');
  else if (id === 'inbox') document.getElementById('bnav-inbox-btn')?.classList.add('active');
  else if (id === 'all-tasks') document.getElementById('bnav-mytasks-btn')?.classList.add('active');
  else if (id === 'more') document.querySelector('.tab.bnav-btn[data-tab="more"]')?.classList.add('active');
}

// ── Home dashboard ─────────────────────────────────────
const HOME_SPACE_OPEN_KEY = 'b-less-home-spaces-open';
function loadHomeOpen() {
  try { return new Set(JSON.parse(localStorage.getItem(HOME_SPACE_OPEN_KEY) || '[]')); }
  catch { return new Set(); }
}
function saveHomeOpen(set) {
  try { localStorage.setItem(HOME_SPACE_OPEN_KEY, JSON.stringify(Array.from(set))); } catch {}
}
// Brand-led list colours — purple/pink first (logo gradient) then complements.
const SPACE_COLORS = ['#a855f7', '#fb7185', '#7c3aed', '#06b6d4', '#10b981', '#f59e0b', '#4f8cff', '#14b8a6'];
// Stable per-list colour: hash an item identifier into a SPACE_COLORS slot
// so the same list always gets the same colour across reloads.
function pickListColor(key) {
  const s = String(key || '');
  let h = 0;
  for (let i = 0; i < s.length; i++) h = ((h << 5) - h + s.charCodeAt(i)) | 0;
  return SPACE_COLORS[Math.abs(h) % SPACE_COLORS.length];
}
const ITEM_TYPE_META = {
  list:    { color: '#a855f7', svg: '<svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></svg>' },
  meeting: { color: '#f97316', svg: '<svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>' },
  visit:   { color: '#10b981', svg: '<svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="m22 2-7 20-4-9-9-4z"/><path d="M22 2 11 13"/></svg>' },
  reviews: { color: '#8b5cf6', svg: '<svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2 9 9l-7 1 5 5-1 7 6-3 6 3-1-7 5-5-7-1z"/></svg>' },
};

function spaceItemTitle(item) {
  if (item.type === 'list') {
    const r = (state.robots || []).find(x => x.id === item.refId);
    return r && r.name ? r.name : 'List';
  }
  if (item.type === 'meeting') {
    const m = (state.meetings || []).find(x => x.id === item.refId);
    return m && m.title ? m.title : 'Meeting';
  }
  if (item.type === 'visit') {
    const v = (state.fieldVisits || []).find(x => x.id === item.refId);
    return v && v.location ? v.location : 'Visit';
  }
  return item.type;
}

function renderHome() {
  const today = new Date(); today.setHours(0,0,0,0);
  const todayIso = ymd(today);
  const weekEnd = new Date(today); weekEnd.setDate(weekEnd.getDate() + 7);
  const me = (typeof DriveAPI !== 'undefined' && DriveAPI.getUserInfo && DriveAPI.getUserInfo()) || null;
  const myEmail = (me && me.email) ? me.email.toLowerCase() : null;

  // This Week — assigned upcoming tasks + scheduled meetings/visits.
  const weekItems = [];
  (state.robots || []).forEach(p => {
    (p.tasks || []).forEach(task => {
      if (task.status === 'done') return;
      const assignedToMe = taskAssignedToEmail(task, myEmail);
      if (!assignedToMe || !task.dueDate) return;
      const d = new Date(task.dueDate + 'T00:00:00');
      if (d >= today && d < weekEnd) {
        weekItems.push({
          kind: 'task',
          date: task.dueDate,
          title: task.title || 'Task',
          sub: p.name || '',
          id: task.id,
          projectId: p.id,
          assignedToMe: true,
          assignees: getTaskAssignees(task),
        });
      }
    });
  });
  (state.meetings || []).forEach(m => {
    if (!m.date) return;
    const d = new Date(m.date + 'T00:00:00');
    if (d >= today && d < weekEnd) {
      weekItems.push({ kind: 'meeting', date: m.date, title: m.title || 'Meeting', sub: m.location || '', id: m.id });
    }
  });
  (state.fieldVisits || []).forEach(v => {
    if (!v.date) return;
    const d = new Date(v.date + 'T00:00:00');
    if (d >= today && d < weekEnd) {
      weekItems.push({ kind: 'visit', date: v.date, title: v.location || 'Visit', sub: v.robot || '', id: v.id });
    }
  });
  weekItems.sort((a, b) => a.date.localeCompare(b.date));

  const weekListEl = document.getElementById('home-week-list');
  const weekCountEl = document.getElementById('home-week-count');
  if (weekListEl) {
    if (weekCountEl) weekCountEl.textContent = weekItems.length || '';
    if (!weekItems.length) {
      weekListEl.innerHTML = `
        <div class="home-list-empty home-empty-week">
          <svg class="home-empty-icon" viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M12 2l1.8 4.5L18 8.4l-4.2 1.9L12 14.8l-1.8-4.5L6 8.4l4.2-1.9L12 2z"/>
            <path d="M19 14l.9 2.2L22 17l-2.1.8L19 20l-.9-2.2L16 17l2.1-.8L19 14z"/>
          </svg>
          <span>No assigned tasks coming up</span>
        </div>
      `;
    } else {
      const ICO_T = '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 8v4l3 2"/></svg>';
      const ICO_M = '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>';
      const ICO_V = '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="m22 2-7 20-4-9-9-4z"/><path d="M22 2 11 13"/></svg>';
      const ICONS = { task: ICO_T, meeting: ICO_M, visit: ICO_V };
      const KIND_COLORS = { meeting: '#f97316', visit: '#10b981' };
      const renderWeekRow = (it) => {
        const c = it.kind === 'task' && it.projectId
          ? pickListColor(it.projectId)
          : (KIND_COLORS[it.kind] || 'var(--accent)');
        const assignees = it.assignees?.length
          ? `<span class="home-list-assignees">${it.assignees.map(a => renderAssigneeChip(a)).join('')}</span>`
          : '';
        const duePill = `<span class="home-list-pill">${escapeHtml(formatDueShort(it.date))}</span>`;
        const assignedPill = it.kind === 'task' ? '<span class="home-list-pill home-list-pill-me">Assigned to me</span>' : '';
        const meta = [assignees, assignedPill, duePill].filter(Boolean).join('');
        return `
          <button class="home-list-item home-list-item-tinted${it.kind === 'task' ? ' home-list-item-assigned' : ''}" data-week-kind="${it.kind}" data-week-id="${escapeAttr(it.id)}" data-week-pid="${escapeAttr(it.projectId || '')}" style="--row-c: ${c};" type="button">
            <span class="home-list-item-icon" style="--c: ${c};">${ICONS[it.kind]}</span>
            <span class="home-list-item-body">
              <span class="home-list-item-title">${escapeHtml(it.title)}</span>
              <span class="home-list-item-sub">${escapeHtml(it.sub || '')}</span>
              ${meta ? `<span class="home-list-item-meta">${meta}</span>` : ''}
            </span>
          </button>
        `;
      };

      weekListEl.innerHTML = `
        <div class="home-day-group home-assigned-group" data-assigned-to-me="true">
          <div class="home-day-head">
            <span class="home-day-name">Upcoming</span>
            <span class="home-day-count">${weekItems.length}</span>
          </div>
          ${weekItems.map(renderWeekRow).join('')}
        </div>
      `;

      weekListEl.querySelectorAll('[data-week-kind]').forEach(el => {
        el.addEventListener('click', () => {
          const k = el.dataset.weekKind, id = el.dataset.weekId, pid = el.dataset.weekPid;
          if (k === 'task' && pid && typeof goToTask === 'function') goToTask(pid, id);
          else if (k === 'meeting' && typeof goToMeeting === 'function') goToMeeting(id);
          else if (k === 'visit' && typeof goToVisit === 'function') goToVisit(id);
        });
      });
    }
  }

  // This Week — 7-day mini strip. One cell per day with task/meeting/
  // visit dots and a count badge. Clicking a day jumps to the calendar
  // tab focused on that date.
  const miniEl = document.getElementById('home-week-mini');
  if (miniEl) {
    const DAY_LABELS_TR = ['Pzt','Sal','Çar','Per','Cum','Cmt','Paz']; // Mon..Sun
    const DAY_LABELS_EN = ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'];
    const lang = (typeof currentLang === 'string' && currentLang) ||
                 (typeof state === 'object' && state && state.lang) || 'en';
    const labels = lang.toLowerCase().startsWith('tr') ? DAY_LABELS_TR : DAY_LABELS_EN;
    const byDay = {};
    weekItems.filter(it => it.date).forEach(it => {
      if (!byDay[it.date]) byDay[it.date] = { task: 0, meeting: 0, visit: 0, total: 0 };
      byDay[it.date][it.kind] = (byDay[it.date][it.kind] || 0) + 1;
      byDay[it.date].total++;
    });
    const cells = [];
    for (let i = 0; i < 7; i++) {
      const d = new Date(today); d.setDate(d.getDate() + i);
      const iso = ymd(d);
      const isToday = i === 0;
      const jsDow = d.getDay(); // 0=Sun..6=Sat → map to Mon-first index
      const labelIdx = (jsDow + 6) % 7;
      const counts = byDay[iso] || { task: 0, meeting: 0, visit: 0, total: 0 };
      const dots = [];
      if (counts.task)    dots.push('<span class="wm-dot wm-dot-task"   title="Tasks"></span>');
      if (counts.meeting) dots.push('<span class="wm-dot wm-dot-meeting" title="Meetings"></span>');
      if (counts.visit)   dots.push('<span class="wm-dot wm-dot-visit"   title="Visits"></span>');
      const countBadge = counts.total ? `<span class="wm-count">${counts.total}</span>` : '';
      cells.push(`
        <button class="wm-cell${isToday ? ' wm-today' : ''}${counts.total ? ' wm-has' : ''}" data-wm-date="${iso}" type="button" role="listitem" aria-label="${labels[labelIdx]} ${d.getDate()}">
          <span class="wm-label">${labels[labelIdx]}</span>
          <span class="wm-day">${d.getDate()}</span>
          <span class="wm-dots">${dots.join('')}</span>
          ${countBadge}
        </button>
      `);
    }
    miniEl.innerHTML = cells.join('');
    miniEl.querySelectorAll('[data-wm-date]').forEach(el => {
      el.addEventListener('click', () => {
        const iso = el.dataset.wmDate;
        // If we have items for that day below, just scroll the list to
        // that group — feels more like a filter than a navigation
        // jump. If the day is empty, open the Calendar view focused on
        // that date so the user lands somewhere useful.
        const group = document.querySelector(`.home-day-group[data-day="${iso}"]`);
        if (group) {
          group.scrollIntoView({ behavior: 'smooth', block: 'start' });
          // Briefly flash the heading so the eye finds it.
          group.classList.add('home-day-flash');
          setTimeout(() => group.classList.remove('home-day-flash'), 1200);
          return;
        }
        try {
          const d = new Date(iso + 'T00:00:00');
          calMonth = { y: d.getFullYear(), m: d.getMonth() };
          calSelected = iso;
        } catch (_) {}
        if (typeof homeNavigate === 'function') homeNavigate('calendar');
      });
    });
  }

  // This Week's Goals (personal + space)
  const goalsEl     = document.getElementById('home-goals-list');
  const goalsCntEl  = document.getElementById('home-goals-count');
  const goalsMoreEl = document.getElementById('home-goals-more');
  if (goalsEl) {
    const wk       = reviewWeekKey();
    const weekData = state.weeklyGoals?.[wk] || { taskIds: [], goals: [] };
    const taskIds  = weekData.taskIds || [];
    const txtGoals = weekData.goals   || [];

    let doneCount = 0;
    let taskGoalCount = 0;
    for (const taskId of taskIds) {
      for (const r of (state.robots || [])) {
        const t = (r.tasks || []).find(t => t.id === taskId);
        if (!t) continue;
        taskGoalCount++;
        if (t.status === 'done') doneCount++;
        break;
      }
    }

    doneCount += txtGoals.filter(g => g.done).length;

    let spaceGoalCount = 0;
    for (const sp of getSharedSpaces()) {
      const spGoals = (state.spaceGoals?.[sp.id]?.[wk] || []).filter(g => !g.deleted);
      for (const g of spGoals) {
        spaceGoalCount++;
        if (g.done) doneCount++;
        if (g.taskId) {
          for (const r of (state.robots || [])) {
            const t = (r.tasks || []).find(t => t.id === g.taskId);
            if (t) {
              if (t.status === 'done' && !g.done) doneCount++;
              break;
            }
          }
        }
      }
    }

    const total = taskGoalCount + txtGoals.length + spaceGoalCount;
    if (goalsCntEl) goalsCntEl.textContent = total ? `${doneCount}/${total}` : '';

    const title = total ? 'Open this week\'s goals' : 'Set this week\'s goals';
    const sub = total ? `${doneCount}/${total} complete this week` : 'No goals set for this week';
    goalsEl.innerHTML = `
      <button class="home-goals-shortcut" type="button" aria-label="${escapeAttr(title)}">
        <span class="home-goals-shortcut-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.5"/></svg>
        </span>
        <span class="home-goals-shortcut-body">
          <span class="home-goals-shortcut-title">${escapeHtml(title)}</span>
          <span class="home-goals-shortcut-sub">${escapeHtml(sub)}</span>
        </span>
        <span class="home-goals-shortcut-arrow" aria-hidden="true">→</span>
      </button>`;
    goalsEl.querySelector('.home-goals-shortcut')?.addEventListener('click', openCurrentWeekGoals);
    if (goalsMoreEl) {
      goalsMoreEl.hidden = true;
      goalsMoreEl.onclick = openCurrentWeekGoals;
    }
  }

  // Recents
  const recentsEl = document.getElementById('home-recents');
  if (recentsEl) {
    const robots = (state.robots || []).slice();
    const lastActivity = (r) => {
      let t = r.createdAt || 0;
      (r.tasks || []).forEach(task => { if ((task.createdAt || 0) > t) t = task.createdAt; if ((task.completedAt || 0) > t) t = task.completedAt; });
      return t;
    };
    robots.sort((a, b) => lastActivity(b) - lastActivity(a));
    const top = robots.slice(0, 5);
    if (!top.length) {
      recentsEl.innerHTML = '<div class="home-list-empty">No lists yet. Tap + to create your first.</div>';
    } else {
      recentsEl.innerHTML = top.map((r, i) => `
        <button class="home-list-item" data-robot-id="${escapeAttr(r.id)}" type="button">
          <span class="home-list-item-icon" style="--c: ${SPACE_COLORS[i % SPACE_COLORS.length]};">
            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></svg>
          </span>
          <span class="home-list-item-body">
            <span class="home-list-item-title">${escapeHtml(r.name || 'Untitled')}</span>
            <span class="home-list-item-sub">${(r.tasks || []).filter(t => t.status !== 'done').length} open</span>
          </span>
        </button>
      `).join('');
      recentsEl.querySelectorAll('[data-robot-id]').forEach(el => {
        el.addEventListener('click', () => homeOpenRobot(el.dataset.robotId));
      });
    }
  }

  // Spaces tree (drawer) — 3-level: Space → Type group → Items
  const spacesEl = document.getElementById('home-spaces');
  if (spacesEl) {
    const open = loadHomeOpen();
    const spaces = state.spaces || [];
    const TYPE_LABEL = {
      list: 'Lists', meeting: 'Meetings', visit: 'Visits',
      reviews: 'Reviews',
    };
    const TYPE_ORDER = ['list', 'meeting', 'visit', 'reviews'];

    // "Shared with you" — Drive files tagged as B-Less spaces that we
    // haven't imported yet. Only rendered when there are pending shares.
    const sharedWithYouHtml = (_pendingShares && _pendingShares.length)
      ? `
        <div class="home-shared-section">
          <div class="home-shared-head">
            <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="7" r="3"/><circle cx="17" cy="7" r="3"/><path d="M2 21v-1a4 4 0 0 1 4-4h3"/><path d="M14 16h3a4 4 0 0 1 4 4v1"/></svg>
            <span>Shared with you</span>
          </div>
          ${_pendingShares.map(s => `
            <div class="home-shared-row">
              <div class="home-shared-info">
                <span class="home-shared-name">${escapeHtml(s.name.replace(/\.bless-space\.json$/i, ''))}</span>
                <span class="home-shared-sub">${escapeHtml(s.ownerEmail || '')} · ${escapeHtml(roleLabel(s.myRole))}</span>
              </div>
              <button class="btn-primary home-shared-import" data-import-share="${escapeAttr(s.fileId)}" type="button">Import</button>
            </div>
          `).join('')}
        </div>
      `
      : '';

    spacesEl.innerHTML = sharedWithYouHtml + spaces.map((sp, i) => {
      const color = SPACE_COLORS[i % SPACE_COLORS.length];
      const isOpen = open.has(sp.id);
      // Spaces only carry lists now. Meetings / visits / journals /
      // links / reviews are global features in More.
      const lists = (sp.items || []).filter(it => it.type === 'list');
      const meta = ITEM_TYPE_META.list;

      const itemsHtml = lists.map(it => {
        // Deterministic colour per list — hash on the underlying robot id so
        // the colour survives renames and stays consistent across devices.
        const c = pickListColor(it.refId || it.id);
        return `
        <button class="home-space-item" data-space-id="${escapeAttr(sp.id)}" data-item-id="${escapeAttr(it.id)}" type="button">
          <span class="home-space-item-icon" style="--c: ${c};">${meta.svg}</span>
          <span class="home-space-item-name">${escapeHtml(spaceItemTitle(it))}</span>
        </button>
      `;}).join('');

      const sharedTooltip = sp.shared
        ? `Shared (${roleLabel(sp.myRole || 'reader')})${sp.ownerName || sp.ownerEmail ? ' · ' + (sp.ownerName || sp.ownerEmail) : ''}`
        : '';
      const sharedBadge = sp.shared
        ? (sp.ownerPicture
            ? `<img class="home-space-owner-avatar" src="${escapeAttr(sp.ownerPicture)}" alt="" title="${escapeAttr(sharedTooltip)}" referrerpolicy="no-referrer" />`
            : `<span class="home-space-shared-badge" title="${escapeAttr(sharedTooltip)}" aria-label="Shared"><svg viewBox="0 0 24 24" width="11" height="11" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="7" r="3"/><circle cx="17" cy="7" r="3"/><path d="M2 21v-1a4 4 0 0 1 4-4h3"/><path d="M14 16h3a4 4 0 0 1 4 4v1"/></svg></span>`)
        : '';
      return `
        <div class="home-space ${isOpen ? 'open' : ''}" data-space-id="${escapeAttr(sp.id)}">
          <div class="home-space-head-row">
            <button class="home-space-head" type="button" data-toggle="${escapeAttr(sp.id)}">
              <span class="home-space-icon" style="--c: ${color};">
                <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 5h7l2 2h9v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><path d="M3 9h18"/></svg>
              </span>
              <span class="home-space-body">
                <span class="home-space-name">${escapeHtml(sp.name)}${sharedBadge}</span>
                <span class="home-space-meta"><span>${lists.length} list${lists.length === 1 ? '' : 's'}</span>${sp.shared ? renderSyncHealthChip(sp) : ''}</span>
              </span>
              <svg class="home-space-chev" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 6 6 6-6 6"/></svg>
            </button>
            <button class="home-space-share-btn" type="button" data-space-share="${escapeAttr(sp.id)}" title="Share / options" aria-label="Share / options">
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>
            </button>
          </div>
          <div class="home-space-items">
            ${itemsHtml || '<div class="home-list-empty" style="padding: 6px 4px;">No lists in this space.</div>'}
            <button class="home-space-item-add" data-add-space="${escapeAttr(sp.id)}" type="button">
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14M5 12h14"/></svg>
              <span>Add to ${escapeHtml(sp.name)}</span>
            </button>
          </div>
        </div>
      `;
    }).join('');
    // Bind handlers
    spacesEl.querySelectorAll('[data-toggle]').forEach(btn => {
      btn.addEventListener('click', () => {
        const sid = btn.dataset.toggle;
        const open = loadHomeOpen();
        const wrap = btn.closest('.home-space, .home-type-group');
        // For top-level Space rows: opening should also expand every type
        // group inside it (Lists, Meetings, …) so the user sees the whole
        // tree in one tap. Closing the space collapses everything again.
        if (wrap && wrap.classList.contains('home-space')) {
          const space = (state.spaces || []).find(s => s.id === sid);
          const typeKeys = space ? TYPE_ORDER.map(t => sid + ':' + t) : [];
          if (open.has(sid)) {
            open.delete(sid);
            typeKeys.forEach(k => open.delete(k));
          } else {
            open.add(sid);
            typeKeys.forEach(k => open.add(k));
          }
          saveHomeOpen(open);
          renderHome();
        } else {
          if (open.has(sid)) open.delete(sid); else open.add(sid);
          saveHomeOpen(open);
          if (wrap) wrap.classList.toggle('open');
        }
      });
    });
    spacesEl.querySelectorAll('[data-item-id]').forEach(btn => {
      btn.addEventListener('click', () => {
        const sid = btn.dataset.spaceId;
        const iid = btn.dataset.itemId;
        if (typeof selectSpaceItem === 'function') selectSpaceItem(sid, iid);
        setBnavActiveFor(null);
        closeSpacesDrawer();
      });
    });
    spacesEl.querySelectorAll('[data-add-space]').forEach(btn => {
      btn.addEventListener('click', () => {
        const sid = btn.dataset.addSpace;
        if (typeof openAddItemPicker === 'function') openAddItemPicker(sid);
      });
    });
    // Drag & drop on the Home tree — same wiring as the sidebar, so users can
    // move a list between Spaces here too. The sidebar version (renderSidebar)
    // covers `.space-item`; this covers `.home-space-item`. Drop target is
    // `.home-space` so the whole row (header + items) accepts the drop.
    spacesEl.querySelectorAll('.home-space-item').forEach(el => {
      el.draggable = true;
      el.addEventListener('dragstart', e => {
        e.dataTransfer.setData('text/karta-item', JSON.stringify({
          itemId: el.dataset.itemId,
          sourceSpaceId: el.dataset.spaceId,
        }));
        e.dataTransfer.effectAllowed = 'move';
        el.classList.add('dragging');
      });
      el.addEventListener('dragend', () => el.classList.remove('dragging'));
    });
    spacesEl.querySelectorAll('.home-space').forEach(el => {
      el.addEventListener('dragover', e => {
        if (!Array.from(e.dataTransfer.types).includes('text/karta-item')) return;
        e.preventDefault();
        e.dataTransfer.dropEffect = 'move';
        el.classList.add('drag-target');
      });
      el.addEventListener('dragleave', e => {
        if (e.target === el || !el.contains(e.relatedTarget)) el.classList.remove('drag-target');
      });
      el.addEventListener('drop', e => {
        e.preventDefault();
        el.classList.remove('drag-target');
        let data;
        try { data = JSON.parse(e.dataTransfer.getData('text/karta-item')); } catch { return; }
        if (!data || !data.itemId) return;
        const targetSpaceId = el.dataset.spaceId;
        if (data.sourceSpaceId === targetSpaceId) return;
        const src = findSpace(data.sourceSpaceId);
        const dst = findSpace(targetSpaceId);
        if (!src || !dst) return;
        const moving = src.items.find(i => i.id === data.itemId);
        if (!moving) return;
        src.items = src.items.filter(i => i.id !== data.itemId);
        dst.items.push(moving);
        save();
        renderHome();
        if (typeof renderSidebar === 'function') renderSidebar();
      });
    });
    // Touch drag shim — HTML5 drag-drop doesn't fire from touch on mobile.
    // Wire raw touch events on the container ONCE (spacesEl persists across
    // re-renders, only its innerHTML is replaced). Long-press (350ms) on a
    // .home-space-item enters drag mode; finger movement before the long-press
    // fires is treated as a scroll and aborts the drag. While dragging, the
    // .home-space under the finger is highlighted; release performs the move.
    if (!spacesEl._touchDragWired) {
      spacesEl._touchDragWired = true;
      let td = null; // active touch-drag state
      const clearTarget = () => {
        document.querySelectorAll('.home-space.drag-target').forEach(n => n.classList.remove('drag-target'));
      };
      spacesEl.addEventListener('touchstart', e => {
        if (e.touches.length !== 1) return;
        const t = e.touches[0];
        const item = t.target.closest && t.target.closest('.home-space-item');
        if (!item) return;
        td = {
          itemId: item.dataset.itemId,
          sourceSpaceId: item.dataset.spaceId,
          el: item,
          startX: t.clientX,
          startY: t.clientY,
          dragging: false,
        };
        td.timer = setTimeout(() => {
          if (!td || td.dragging) return;
          td.dragging = true;
          item.classList.add('dragging');
        }, 350);
      }, { passive: true });
      spacesEl.addEventListener('touchmove', e => {
        if (!td) return;
        const t = e.touches[0];
        if (!t) return;
        if (!td.dragging) {
          const dx = t.clientX - td.startX;
          const dy = t.clientY - td.startY;
          if (Math.hypot(dx, dy) > 10) {
            clearTimeout(td.timer);
            td = null;
          }
          return;
        }
        e.preventDefault(); // stop page scroll while dragging
        clearTarget();
        const under = document.elementFromPoint(t.clientX, t.clientY);
        const target = under && under.closest && under.closest('.home-space');
        if (target && target.dataset.spaceId !== td.sourceSpaceId) {
          target.classList.add('drag-target');
        }
      }, { passive: false });
      const endDrag = e => {
        if (!td) return;
        clearTimeout(td.timer);
        const wasDragging = td.dragging;
        if (wasDragging) {
          clearTarget();
          td.el.classList.remove('dragging');
          const t = e.changedTouches && e.changedTouches[0];
          const under = t && document.elementFromPoint(t.clientX, t.clientY);
          const target = under && under.closest && under.closest('.home-space');
          if (target && target.dataset.spaceId !== td.sourceSpaceId) {
            const src = findSpace(td.sourceSpaceId);
            const dst = findSpace(target.dataset.spaceId);
            const moving = src && src.items.find(i => i.id === td.itemId);
            if (src && dst && moving) {
              src.items = src.items.filter(i => i.id !== td.itemId);
              dst.items.push(moving);
              save();
              renderHome();
              if (typeof renderSidebar === 'function') renderSidebar();
            }
          }
          // Eat the synthetic click that fires after touchend so the item
          // doesn't navigate when the user only meant to drop it.
          const suppress = ev => { ev.preventDefault(); ev.stopPropagation(); };
          document.addEventListener('click', suppress, { capture: true, once: true });
        }
        td = null;
      };
      spacesEl.addEventListener('touchend', endDrag);
      spacesEl.addEventListener('touchcancel', () => {
        if (!td) return;
        clearTimeout(td.timer);
        if (td.dragging) {
          clearTarget();
          td.el.classList.remove('dragging');
        }
        td = null;
      });
    }
    // Share / options button — opens the floating space menu
    spacesEl.querySelectorAll('[data-space-share]').forEach(btn => {
      btn.addEventListener('click', e => {
        e.stopPropagation();
        const sid = btn.dataset.spaceShare;
        if (typeof openSpaceMenu === 'function') openSpaceMenu(sid, btn);
      });
    });
    // Import shared-space button (in the "Shared with you" section)
    spacesEl.querySelectorAll('[data-import-share]').forEach(btn => {
      btn.addEventListener('click', async e => {
        e.stopPropagation();
        btn.disabled = true;
        btn.textContent = 'Importing…';
        await importSharedSpace(btn.dataset.importShare);
      });
    });
  }
}

// Spaces drawer (left slide-in, opened by the hamburger on Home)
function openSpacesDrawer() {
  document.body.classList.add('spaces-drawer-open');
  // Re-render so the tree reflects the latest data (new items, etc.)
  renderHome();
}
function closeSpacesDrawer() {
  document.body.classList.remove('spaces-drawer-open');
}

// Quick notes drawer (mobile/tablet < 1200px — desktop shows it as a fixed rail)
function openQuickNotes() {
  document.body.classList.add('quick-notes-open');
  if (typeof initQuickNotes === 'function') initQuickNotes();
  if (typeof renderQuickNotes === 'function') renderQuickNotes();
  setTimeout(() => document.getElementById('quick-notes-area')?.focus(), 80);
}
function closeQuickNotes() {
  document.body.classList.remove('quick-notes-open');
}

function homeOpenRobot(rid) {
  let spaceId = null, itemId = null;
  (state.spaces || []).forEach(s => (s.items || []).forEach(it => {
    if (it.type === 'list' && it.refId === rid) { spaceId = s.id; itemId = it.id; }
  }));
  if (spaceId && itemId && typeof selectSpaceItem === 'function') selectSpaceItem(spaceId, itemId);
  else { state.currentRobotId = rid; activateSection('robots'); renderRobotList(); renderRobotDetail(); }
  setBnavActiveFor(null);
}

function homeNavigate(target) {
  if (target === 'home')           { if (typeof openHome  === 'function') openHome();  else activateSection('home'); }
  else if (target === 'inbox')     { if (typeof openInbox === 'function') openInbox(); else activateSection('inbox'); }
  else if (target === 'today')     showCrossView('today');
  else if (target === 'calendar')  showCrossView('calendar');
  else if (target === 'all-tasks') showCrossView('all-tasks');
  else if (target === 'visits')    showCrossView('visits');
  else if (target === 'search')    openSearchModal();
  else if (target === 'add')       openQuickCapture();
  else if (target === 'more')      { activateSection('more'); setBnavActiveFor('more'); }
  else if (target === 'meetings')  {
    state.currentMeetingId = null;
    activateSection('meetings');
    document.getElementById('meetings')?.removeAttribute('data-detail-open');
    (typeof renderMeetingList === 'function') && renderMeetingList();
    (typeof renderMeetingDetail === 'function') && renderMeetingDetail();
  }
  else if (target === 'reviews')   {
    activateSection('reviews');
    setBnavActiveFor('more');
    document.getElementById('reviews')?.removeAttribute('data-detail-open');
    (typeof renderReviews === 'function') && renderReviews();
    refreshAllSharedSpaces(); // pull latest space goals before rendering
    startReviewsPoll();
  }
}

// Inbox = assigned/overdue tasks + shared-space activity.
function getSharedActivities() {
  try {
    const items = JSON.parse(localStorage.getItem(SHARED_ACTIVITY_KEY) || '[]');
    return Array.isArray(items) ? items : [];
  } catch { return []; }
}
function saveSharedActivities(items) {
  try { localStorage.setItem(SHARED_ACTIVITY_KEY, JSON.stringify(items.slice(0, 80))); } catch {}
}
function addSharedActivity(activity) {
  if (!activity || !activity.id) return;
  const items = getSharedActivities();
  if (items.some(it => it.id === activity.id)) return;
  items.unshift(activity);
  saveSharedActivities(items);
  refreshInboxBadge();
}
function markSharedActivitySeen(activityId) {
  saveSharedActivities(getSharedActivities().filter(it => it.id !== activityId));
  refreshInboxBadge();
}
function sharedActivityText(kind) {
  if (kind === 'task-added') return 'added a task';
  if (kind === 'note-added') return 'added a note';
  if (kind === 'subtask-added') return 'added a subtask';
  return 'updated a task';
}
function getInboxSeen() {
  try { return JSON.parse(localStorage.getItem('b-less.inbox-seen') || '{}') || {}; }
  catch { return {}; }
}
function markInboxSeen(taskId) {
  const seen = getInboxSeen();
  seen[taskId] = Date.now();
  try { localStorage.setItem('b-less.inbox-seen', JSON.stringify(seen)); } catch {}
  refreshInboxBadge();
}

function renderInbox() {
  const list = document.getElementById('inbox-list');
  if (!list) return;
  const today = new Date(); today.setHours(0,0,0,0);
  const me = (typeof DriveAPI !== 'undefined' && DriveAPI.getUserInfo && DriveAPI.getUserInfo()) || null;
  const myEmail = (me && me.email) ? me.email.toLowerCase() : null;
  const seen = getInboxSeen();
  const overdue  = [];
  const assigned = [];
  const activities = getSharedActivities();
  const seenIds  = new Set();
  (state.robots || []).forEach(r => {
    (r.tasks || []).forEach(task => {
      if (task.status === 'done') return;
      // Assigned-to-me bucket: another user handed me this task and I
      // haven't acknowledged it yet (acknowledged = clicked once from
      // the inbox). Stored locally so it doesn't sync.
      if (myEmail
          && taskAssignedToEmail(task, myEmail)
          && task.assignedBy && task.assignedBy.toLowerCase() !== myEmail
          && !seen[task.id]) {
        assigned.push({ task, project: r });
        seenIds.add(task.id);
      }
      // Overdue bucket: due date in the past. Skip if it's already in
      // the assigned list so the same task doesn't appear twice.
      if (task.dueDate) {
        const d = new Date(task.dueDate + 'T00:00:00');
        if (d < today && !seenIds.has(task.id)) overdue.push({ task, project: r });
      }
    });
  });
  const items = assigned.concat(overdue);
  const totalCount = items.length + activities.length;
  // Update pill badge + drawer-nav badge
  const badge = document.getElementById('inbox-badge');
  if (badge) {
    if (totalCount) { badge.textContent = totalCount > 99 ? '99+' : String(totalCount); badge.classList.add('has'); }
    else { badge.textContent = ''; badge.classList.remove('has'); }
  }
  const drawerBadge = document.getElementById('drawer-inbox-badge');
  if (drawerBadge) {
    if (totalCount) { drawerBadge.textContent = totalCount > 99 ? '99+' : String(totalCount); drawerBadge.hidden = false; }
    else { drawerBadge.hidden = true; }
  }
  if (!totalCount) {
    list.innerHTML = '<div class="home-list-empty" style="padding: 32px 16px;">Inbox zero — nothing assigned to you or past due.</div>';
    return;
  }
  const sectionHtml = (heading, group, kind) => {
    if (!group.length) return '';
    const accent = kind === 'assigned' ? '#a855f7' : '#ff6b6b';
    return `
      <div class="inbox-section">
        <div class="inbox-section-head">${escapeHtml(heading)}</div>
        ${group.map(it => `
          <button class="home-list-item" data-pid="${escapeAttr(it.project.id)}" data-tid="${escapeAttr(it.task.id)}" data-inbox-kind="${kind}" type="button">
            <span class="home-list-item-icon" style="--c: ${accent};">
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                ${kind === 'assigned'
                  ? '<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="M22 4 12 14.01l-3-3"/>'
                  : '<circle cx="12" cy="12" r="9"/><path d="M12 8v4l3 3"/>'}
              </svg>
            </span>
            <span class="home-list-item-body">
              <span class="home-list-item-title">${escapeHtml(it.task.title)}</span>
              <span class="home-list-item-sub">${
                kind === 'assigned'
                  ? `${escapeHtml(it.project.name || 'List')} · from ${escapeHtml(it.task.assignedBy || '?')}`
                  : `${escapeHtml(it.project.name || 'List')} · ${escapeHtml(it.task.dueDate || '')}`
              }</span>
            </span>
          </button>
        `).join('')}
      </div>
    `;
  };
  const activityHtml = activities.length ? `
    <div class="inbox-section">
      <div class="inbox-section-head">Shared activity</div>
      ${activities.map(it => `
        <button class="home-list-item" data-activity-id="${escapeAttr(it.id)}" data-pid="${escapeAttr(it.projectId || '')}" data-tid="${escapeAttr(it.taskId || '')}" data-inbox-kind="activity" type="button">
          <span class="home-list-item-icon" style="--c: #38bdf8;">
            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z"/>
            </svg>
          </span>
          <span class="home-list-item-body">
            <span class="home-list-item-title">${escapeHtml(it.taskTitle || 'Task')}</span>
            <span class="home-list-item-sub">${escapeHtml(sharedActivityText(it.kind))}${it.actorEmail ? ` - ${escapeHtml(it.actorEmail)}` : ''} - ${escapeHtml(it.spaceName || 'Shared Space')}</span>
          </span>
        </button>
      `).join('')}
    </div>
  ` : '';
  list.innerHTML =
    activityHtml +
    sectionHtml('Assigned to you', assigned, 'assigned') +
    sectionHtml('Overdue',         overdue,  'overdue');

  list.querySelectorAll('[data-pid]').forEach(el => {
    el.addEventListener('click', () => {
      const tid = el.dataset.tid;
      // Acknowledge: clicking an "assigned to you" inbox row marks it as
      // seen so it doesn't keep nagging on every visit.
      if (el.dataset.inboxKind === 'assigned' && tid) markInboxSeen(tid);
      if (el.dataset.inboxKind === 'activity' && el.dataset.activityId) markSharedActivitySeen(el.dataset.activityId);
      if (typeof goToTask === 'function') goToTask(el.dataset.pid, tid);
    });
  });
}
function openInbox() {
  state.currentItemId = null;
  activateSection('inbox');
  setBnavActiveFor('inbox');
  renderInbox();
}

function openHome() {
  state.currentItemId = null;
  if (typeof activateSection === 'function') activateSection('home');
  setBnavActiveFor('home');
  renderHome();
}
// Refresh the inbox badge count regardless of which section is showing
function refreshInboxBadge() {
  const badge        = document.getElementById('inbox-badge');
  const drawerBadge  = document.getElementById('drawer-inbox-badge');
  if (!badge && !drawerBadge) return;
  const today = new Date(); today.setHours(0,0,0,0);
  const me = (typeof DriveAPI !== 'undefined' && DriveAPI.getUserInfo && DriveAPI.getUserInfo()) || null;
  const myEmail = (me && me.email) ? me.email.toLowerCase() : null;
  const seen = getInboxSeen();
  let count = getSharedActivities().length;
  const counted = new Set();
  (state.robots || []).forEach(r => (r.tasks || []).forEach(task => {
    if (task.status === 'done') return;
    let assigned = false;
    if (myEmail
        && taskAssignedToEmail(task, myEmail)
        && task.assignedBy && task.assignedBy.toLowerCase() !== myEmail
        && !seen[task.id]) {
      count++;
      counted.add(task.id);
      assigned = true;
    }
    if (!assigned && task.dueDate) {
      const d = new Date(task.dueDate + 'T00:00:00');
      if (d < today && !counted.has(task.id)) count++;
    }
  }));
  if (badge) {
    if (count) { badge.textContent = count > 99 ? '99+' : String(count); badge.classList.add('has'); }
    else { badge.textContent = ''; badge.classList.remove('has'); }
  }
  if (drawerBadge) {
    if (count) { drawerBadge.textContent = count > 99 ? '99+' : String(count); drawerBadge.hidden = false; }
    else { drawerBadge.hidden = true; }
  }
}
document.getElementById('bnav-home-btn')?.addEventListener('click', openHome);
document.getElementById('bnav-inbox-btn')?.addEventListener('click', openInbox);
document.getElementById('bnav-mytasks-btn')?.addEventListener('click', () => { showCrossView('all-tasks'); setBnavActiveFor('all-tasks'); });
document.getElementById('home-search-pill')?.addEventListener('click', () => openSearchModal());
// Inline topbar search — type into the input, results render in the
// Topbar wiring: search opens the search modal; avatar opens the Drive popover.
document.getElementById('topbar-search-btn')?.addEventListener('click', () => {
  if (typeof openSearchModal === 'function') openSearchModal();
});
document.getElementById('topbar-burger-btn')?.addEventListener('click', openSpacesDrawer);
document.getElementById('topbar-notes-btn')?.addEventListener('click', openQuickNotes);
document.getElementById('quick-notes-close')?.addEventListener('click', closeQuickNotes);
document.getElementById('quick-notes-backdrop')?.addEventListener('click', closeQuickNotes);

// Avatar reflects the Drive user (picture if signed in, fallback icon if not).
// Clicking it opens the Cloud Backup popover — same handler as the More-page
// Drive entry, so the OAuth popup user-gesture context is preserved.
function updateTopbarAvatar(userInfo) {
  const img      = document.getElementById('topbar-avatar-img');
  const fallback = document.getElementById('topbar-avatar-fallback');
  const dot      = document.getElementById('topbar-avatar-dot');
  if (!img || !fallback) return;
  let info = userInfo;
  if (!info) {
    try {
      const raw = localStorage.getItem('b-less-drive-user');
      if (raw) info = JSON.parse(raw);
    } catch {}
    if (!info && typeof BackupManager !== 'undefined' && BackupManager.getUserInfo) {
      info = BackupManager.getUserInfo();
    }
  }
  if (info && info.picture) {
    img.src = info.picture;
    img.alt = info.name || info.email || 'Account';
    img.hidden = false;
    fallback.hidden = true;
    if (dot) dot.hidden = false;
  } else {
    img.removeAttribute('src');
    img.hidden = true;
    fallback.hidden = false;
    if (dot) dot.hidden = true;
  }
}
// Expose for BackupManager to call after fetchUserInfo / signOut
window.onDriveUserChange = updateTopbarAvatar;
document.getElementById('topbar-avatar-btn')?.addEventListener('click', e => {
  // Re-use the same handler logic the existing entry points use. The popover
  // toggles open/closed; if not signed in, the popover content shows the
  // sign-in CTA. Done synchronously so any user-gesture-requiring OAuth flow
  // launched from inside the popover still works.
  e.stopPropagation();
  const popover  = document.getElementById('backup-popover');
  const backdrop = document.getElementById('backup-backdrop');
  if (!popover) return;
  const isOpen = popover.classList.contains('open');
  popover.classList.toggle('open', !isOpen);
  if (backdrop) backdrop.classList.toggle('open', !isOpen);
});
// Boot: paint avatar from cached userInfo immediately (no Drive call needed).
updateTopbarAvatar();
document.getElementById('spaces-drawer-backdrop')?.addEventListener('click', closeSpacesDrawer);
document.getElementById('drawer-add-space-btn')?.addEventListener('click', () => {
  if (typeof addSpace === 'function') { addSpace(); renderHome(); }
});
document.querySelectorAll('[data-home-go]').forEach(b => {
  b.addEventListener('click', () => homeNavigate(b.dataset.homeGo));
});
// Persistent drawer nav (sidebar shortcuts mirroring the bottom-nav pill).
// Auto-close the drawer on mobile after navigating; on desktop the drawer
// is always visible so closing is a no-op.
document.querySelectorAll('[data-drawer-go]').forEach(b => {
  b.addEventListener('click', () => {
    const target = b.dataset.drawerGo;
    if (typeof homeNavigate === 'function') homeNavigate(target);
    if (window.matchMedia('(max-width: 999px)').matches) closeSpacesDrawer();
    // Reflect the active state on the drawer-nav buttons
    document.querySelectorAll('[data-drawer-go]').forEach(x => {
      x.classList.toggle('active', x === b);
    });
  });
});

// Version is rendered straight into index.html so it shows even if app.js
// errors out. JS-side override kept here as a safety net for future bumps.
// (APP_VERSION is var-declared near the top of this file so functions that
// run during boot — like the popover renderer — can safely reference it.)
const _verEl = document.getElementById('more-version');
if (_verEl) _verEl.textContent = 'B-Less v' + APP_VERSION;

// Default landing view: Home grid (colorful card overview of every section)
openHome();

// First-run welcome modal
maybeShowWelcome();
maybeShowBrief();
