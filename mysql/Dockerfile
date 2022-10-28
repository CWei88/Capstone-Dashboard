FROM mysql

ENV USER_NAME root
ENV MYSQL_DATABASE ESGDatabase
ENV MYSQL_ROOT_PASSWORD password

# # These line for running backup.sh
# COPY entrypoint.sh /entrypoint.sh
# RUN chmod +x /mysql/backup.sh
# ENTRYPOINT "/backup.sh"

#ADD backup.sql /docker-entrypoint-initdb.d



EXPOSE 3306