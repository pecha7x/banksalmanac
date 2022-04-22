module Api
  class BanksController < ApplicationController
    def index
      resources = resource_class.all
      render json: resources, each_serializer: BankSerializer
    end

    def show
      render json: resource_class.find(params[:id]), serializer: BankSerializer
    end

    def update
      render json: resource_class.update(params[:id], resource_params), serializer: BankSerializer
    end

    private

    def resource_class
      Bank
    end

    def resource_params
      params.permit([:enabled, { data: resource_class::DATA_FIELDS }])
    end
  end
end
