FROM postgres:11

COPY data.sql /docker-entrypoint-initdb.d/
COPY postgresql.conf /etc/postgresql/postgresql.conf

CMD [ "postgres" , "-c" , "config_file=/etc/postgresql/postgresql.conf" ]

EXPOSE 5432
