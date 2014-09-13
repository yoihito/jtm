class Publishers::TestsController < ApplicationController
  before_action :set_publisher#, only: [:index, :new, :edit, :create, :update, :destroy, :edit]
  before_action :set_publishers_test, only: [:show, :edit, :update, :destroy]
  after_action :verify_authorized, except: [:index]


  # GET /publishers/tests
  # GET /publishers/tests.json
  def index
    authorize @publisher
    @publishers_tests = @publisher.tests

  end

  # GET /publishers/tests/1
  # GET /publishers/tests/1.json
  def show
    authorize @publishers_test
  end

  # GET /publishers/tests/new
  def new
    @publishers_test = Test.new
    @publishers_test.author = @publisher
    authorize @publishers_test
    2.times { @publishers_test.slides.build }
  end

  # GET /publishers/tests/1/edit
  def edit
    authorize @publishers_test
    1.times { @publishers_test.slides.build }
  end

  # POST /publishers/tests
  # POST /publishers/tests.json
  def create
    @publishers_test = Test.new(publishers_test_params)
    @publishers_test.author = @publisher
    authorize @publishers_test
    respond_to do |format|
      if @publishers_test.save
        format.html { redirect_to publisher_tests_path(publisher_id: @publisher.id), notice: 'Test was successfully created.' }
        format.json { render :show, status: :created, location: @publishers_test }
      else
        format.html { render :new }
        format.json { render json: @publishers_test.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /publishers/tests/1
  # PATCH/PUT /publishers/tests/1.json
  def update
    authorize @publishers_test
    respond_to do |format|
      if @publishers_test.update(publishers_test_params)
        format.html { redirect_to @publishers_test, notice: 'Test was successfully updated.' }
        format.json { render :show, status: :ok, location: @publishers_test }
      else
        format.html { render :edit }
        format.json { render json: @publishers_test.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /publishers/tests/1
  # DELETE /publishers/tests/1.json
  def destroy
    authorize @publishers_test
    @publishers_test.destroy
    respond_to do |format|
      format.html { redirect_to publishers_tests_url, notice: 'Test was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_publishers_test
      @publishers_test = Test.find_by(id: params[:id])
      @publishers_test.author == @publisher or raise ActiveRecord::RecordNotFound
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def publishers_test_params
      params.require(:test).permit(:title, :description ,:picture, slides_attributes: [:id,:question, :description, :picture])
    end

    def set_publisher
      if params[:publisher_id]
        @publisher = Publisher.find(params[:publisher_id])
      end
    end

end

