create database express_example;

\connect express_example;


create schema app_example;
set search_path = app_example;

drop table if exists post;
drop table if exists user_data;

drop type if exists user_role_type;

create type user_role_type as enum ('common', 'admin');
create table user_data
(
    id            serial primary key,
    email         text unique not null,
    name          text,
    password      text        not null,
    user_role     user_role_type,
    is_active     boolean     not null default true,
    modified_time time with time zone  default now()
);

create table post
(
    id            int,
    owner_id      int references user_data (id),
    content       text,
    modified_time time with time zone default now(),
    primary key (id, owner_id)
);


-- create table post_history
-- (
--     id            int,
--     owner_id      int references user_data (id),
--     content       text,
--     modified_time time with time zone,
--     primary key (id, owner_id, modified_time)
-- );
insert into user_data(email, name, password, user_role)
values ('jacktok@gmail.com', 'jack_tok', '', 'admin');
