FROM mysql

ENV USER_NAME root
ENV MYSQL_DATABASE ESGDatabase
ENV MYSQL_ROOT_PASSWORD password

ADD backup.sql /docker-entrypoint-initdb.d



EXPOSE 3306