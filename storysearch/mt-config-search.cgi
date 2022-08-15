#======== REQUIRED SETTINGS ==========

CGIPath        https://admin.atwill.work/app/
StaticWebPath  /app/mt-static/
StaticFilePath /var/www/cms/app/mt-static

#======== DATABASE SETTINGS ==========

ObjectDriver DBI::mysql
Database mt
DBUser mt
DBPassword moEUtP2R949Y9A[
DBHost localhost

#======== MAIL =======================
EmailAddressMain info@atwill.work
#MailTransfer sendmail
#SendMailPath /usr/lib/sendmail

MailTransfer smtp
SMTPServer email-smtp.us-east-1.amazonaws.com
SMTPPort 587
SMTPUser AKIAJPLURQRBL5DFLA6A
SMTPPassword AhcPPbNej58J8UfIf0guJB07n5vBt43oZQt+sB1EbiWt
SMTPAuth starttls
    
DefaultLanguage ja

ImageDriver ImageMagick
PIDFilePath /var/www/tools/mt.pid
EntriesPerRebuild 400
TransparentProxyIPs 2
MemcachedServers 127.0.0.1:11211
AssetFileExtensions  gif, jpe?g, png, bmp, tiff?, mp3, ogg, aiff, wav, wma, aac, flac, m4a, mov, avi, 3gp, asf, mp4, qt, wmv, asx, mpg, flv, mkv, ogm, pdf, ppt
SearchScript search.cgi
DataAPICORSAllowOrigin http://award.atwill.work
CookiePath /
AutoSaveFrequency 0
AllowFileInclude 1

PowerCMSFilesDir /var/www/cms/app/powercms_files