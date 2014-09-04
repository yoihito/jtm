# config valid only for Capistrano 3.1
lock '3.2.1'

set :application, 'justtestme'
set :user, "deploy"
set :port, 1026
set :deploy_to, "/home/deploy/apps/justtestme"
set :deploy_via, :remote_cache
set :use_sudo, :false

set :scm, "git"
set :repo_url, "git@github.com:yoihito/jtm.git"
set :branch, "master"

set :format, :pretty
set :log_level, :debug
set :pty, true

set :linked_files, %w{config/database.yml config/secrets.yml}
set :linked_dirs, %w{public/uploads tmp/pids}

after "deploy", "deploy:cleanup"

set :keep_releases, 5

#Rake::Task["deploy:assets:precompile"].clear

namespace :deploy do

  cmds = %w[start stop restart]
  cmds.each do |cmd|
    desc "#{cmd} unicorn server"
    task cmd do
      on roles(:app), in: :sequence, wait: 5 do
        sudo "/etc/init.d/unicorn_#{fetch(:application)} #{cmd}"
      end
    end
  end

  task :setup_config do
    on roles(:app), in: :sequence, wait: 5 do
      sudo "ln -nfs #{current_path}/config/nginx.conf /etc/nginx/sites-enabled/default"
      sudo "ln -nfs #{current_path}/config/unicorn_init.sh /etc/init.d/unicorn_#{fetch(:application)}"
     # run "mkdir -p #{shared_path}/config"
      # put File.read("config/database.example.yml"), "#{shared_path}/config/database.yml"
      puts "Now edit the config files in #{shared_path}."
    end
  end

  after "deploy:starting", "deploy:setup_config"

  # task :symlink_config do
  #   on roles(:app), in: :sequence, wait: 5 do
  #     run "ln -nfs #{shared_path}/config/database.yml #{release_path}/config/database.yml"
  #   end
  # end
  # after "deploy:finishing", "deploy:symlink_config"

  # desc "Make sure local git is in sync with remote."
  # task :check_revision do
  #   on roles(:web), in: :sequence, wait: 5 do
  #     unless `git rev-parse HEAD` == `git rev-parse origin/master`
  #       puts "WARNING: HEAD is not the same as origin/master"
  #       puts "Run `git push` to sync changes."
  #       exit
  #     end
  #   end
  # end
  # before "deploy", "deploy:check_revision"

end
