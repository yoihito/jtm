class PublishersController < ApplicationController
  before_action :set_publisher, only: [:edit, :update, :destroy, :like, :dislike]
  after_action :verify_authorized, except: [:index, :show]

  # GET /publishers
  # GET /publishers.json
  def index
    @publishers = Publisher.all
  end

  # GET /publishers/1
  # GET /publishers/1.json
  def show
    @publisher = Publisher.find(params[:id])
    @order = 'created_at desc'
    if params[:q] && params[:q][:s]
        @order = params[:q][:s]
    end
    @q = Test.where(author: @publisher).includes(:translations,:user_answers).search
    @tests = @q.result.order(@order)
  end

  # GET /publishers/new
  def new
    @publisher = Publisher.new
    authorize @publisher
  end

  # GET /publishers/1/edit
  def edit
    authorize @publisher
  end

  # POST /publishers
  # POST /publishers.json
  def create

    @publisher = Publisher.new(publisher_params)

    authorize @publisher

    respond_to do |format|
      if @publisher.save
        current_user.publishers << @publisher
        format.html { redirect_to @publisher, notice: 'Publisher was successfully created.' }
        format.json { render :show, status: :created, location: @publisher }
      else
        format.html { render :new }
        format.json { render json: @publisher.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /publishers/1
  # PATCH/PUT /publishers/1.json
  def update
    authorize @publisher
    respond_to do |format|
      if @publisher.update(publisher_params)
        format.html { redirect_to @publisher, notice: 'Publisher was successfully updated.' }
        format.json { render :show, status: :ok, location: @publisher }
      else
        format.html { render :edit }
        format.json { render json: @publisher.errors, status: :unprocessable_entity }
      end
    end
  end

  def change_avatar
    authorize @publisher
    respond_to do |format|
      if @publisher.update(publisher_avatar_params)
        format.html { render :nothing => true, :status => 200, :content_type => 'text/html' }
      else
        format.html { render :nothing => true, :status => 404, :content_type => 'text/html' }
      end
    end
  end

  # DELETE /publishers/1
  # DELETE /publishers/1.json
  def destroy
    authorize @publisher

    @publisher.destroy
    respond_to do |format|
      format.html { redirect_to publishers_url, notice: 'Publisher was successfully destroyed.' }
      format.json { head :no_content }
    end
  end



  private
    # Use callbacks to share common setup or constraints between actions.
    def set_publisher
      @publisher = Publisher.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def publisher_params
      params.require(:publisher).permit(:title, :description,:avatar)
    end

  def publisher_avatar_params
    params.require(:publisher).permit(:avatar)
  end
end
